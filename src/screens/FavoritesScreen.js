import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, collection, query, where, onSnapshot } from "firebase/firestore";
import { size, map } from "lodash";
import { UserNotLogged, NotFoundVendedores, VendedorFavorito } from "../components/Favorites";
import { Loading } from "../components/Shared";
import { db } from "../utils";


export function FavoritesScreen() {
  const [hasLogged, setHasLogged] = useState(null);
  const [vendedores, setVendedores] = useState(null);
  const auth = getAuth();
  //console.log(vendedores);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
    });
  }, []);

  useEffect(() => {
    if (hasLogged) {
      const q = query(
        collection(db, "favorites"),
        where("idUser", "==", auth.currentUser.uid)
      );
 
      onSnapshot(q, async (snapshot) => {
        let vendedorArray = [];
        for await (const item of snapshot.docs) {
          const data = item.data();
          const docRef = doc(db, "vendedores", data.idVendedor);
          const docSnap = await getDoc(docRef);
          const newData = docSnap.data();
          newData.idFavorite = data.id;
 
          vendedorArray.push(newData);
        }
        setVendedores(vendedorArray);
      });
    }
  }, [hasLogged]);
  
  
  if(!hasLogged) return <UserNotLogged />;

  if(!vendedores) return <Loading show text="Cargando" />;

  if(size(vendedores) === 0) return <NotFoundVendedores />;

  return (
    <ScrollView>
      {map(vendedores, (vendedor) => (
        <VendedorFavorito key={vendedor.id} vendedor={vendedor} />
      ))}
    </ScrollView>
  );
}
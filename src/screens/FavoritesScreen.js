import React, { useState, useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../utils";
import { size, map } from "lodash";
import { Guest, NotFoundSellers, FavoriteSellers } from "../components/Favorites";
import { Loading } from "../components/Shared";

export function FavoritesScreen() {
    const [hasLogged, setHasLogged] = useState(null);
    const [sellers, setSellers] = useState(null);
    const auth = getAuth();

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        setHasLogged(user ? true : false);
      });
    }, []);

    useEffect(() => {
        const q = query(
            collection(db, "favorites"),
            where("idUser", "==", auth.currentUser.uid)
        );

        onSnapshot(q, async (snapshot) => {
             let sellerArray = [];
            for await (const item of snapshot.docs) {
                const data = item.data();
                const docRef = doc(db, "sellers", data.idSeller);
                const docSnap = await getDoc(docRef);
                const newData = docSnap.data();
                newData.idFavorite = data.id
                sellerArray.push(newData);
            }

            setSellers(sellerArray);
        });
    }, []);
    
    
    if(!hasLogged) return <Guest/>;

    if(!sellers) return <Loading show text="Cargando"/>

    if(size(sellers) === 0) return <NotFoundSellers/>

    return (
        <ScrollView>
            {map(sellers, (seller) => (
                <FavoriteSellers key={seller.id} seller={seller}/>
            ))}
        </ScrollView>
    )
}
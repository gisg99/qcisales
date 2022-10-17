import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { getAuth } from "firebase/auth";
import { doc, setDoc, getDocs, query, where, collection, deleteDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { size, forEach } from "lodash";
import { db } from "../../../utils";
import { styles } from './BtnFavorite.styles';


export function BtnFavorite(props) {
    const { idVendedor } = props;
    const [isFavorite, setIsFavorite] = useState(undefined);
    const [isReload, setIsReload] = useState(false);
    const auth = getAuth();

    useEffect(() => {
      (async () => {
        const response = await getFavorites(); 

        if(size(response) > 0) {
          setIsFavorite(true);
        } else {
          setIsFavorite(false);
        }
      })(); 
    }, [idVendedor, isReload]);

    const onReload = () => setIsReload((prevState) => !prevState);

    const getFavorites = async () => {
      const q = query(
        collection(db, "favorites"),
        where("idVendedor", "==", idVendedor),
        where("idUser", "==", auth.currentUser.uid)
      );
      const result = await getDocs(q);
      return result.docs;
    };
    

    const addFavorite = async () => {
        try {
            const idFavorite = uuid();
            const data = {
                id: idFavorite,
                idVendedor,
                idUser: auth.currentUser.uid,
            };
            
            await setDoc(doc(db, "favorites", idFavorite), data);
            onReload();

        } catch (error) {
            console.log(error);
        }
    };

    const removeFavorite = async() => {
      try {
        const response = await getFavorites();
        forEach(response, async (item) => {
          await deleteDoc(doc(db, "favorites", item.id));
        });
        onReload();
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <View style={styles.content} >
      {isFavorite !== undefined && (
      <Icon 
      type="material-community" 
      name={isFavorite ? "heart" : "heart-outline"}
      color={isFavorite ? "#f60808" : "#000"}
      size={35}
      onPress={isFavorite ? removeFavorite : addFavorite}
      />
      )}
    </View>
  );
}
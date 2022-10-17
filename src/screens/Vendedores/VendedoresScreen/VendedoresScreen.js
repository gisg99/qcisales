import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { LoadingModal } from "../../../components/Shared";
import { ListVendedores } from "../../../components/Vendedores";
import { screen, db } from "../../../utils";
import { styles } from "./VendedoresScreen.styles";

export function VendedoresScreen(props) {
    const {navigation} = props;
    const [currentUser, setCurrentUser] = useState(null);
    const [vendedores, setVendedores] = useState(null);

    useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
      });
    }, []);
    

    useEffect(() => {
       const q = query(
        collection(db, "vendedores"),
        orderBy("createdAt", "desc")
        );

       onSnapshot(q, (snapshot) => {
        setVendedores(snapshot.docs);
       });
    }, []);
    


    const goToAddVendedor = () => {
        navigation.navigate(screen.vendedores.addVendedor);
    };

    return (
        <View style={styles.content} >

        {!vendedores ? (
            <LoadingModal show text="Cargando" />
        ) : (
            <ListVendedores vendedores={vendedores} />
        )}

            

        {currentUser && (
            <Icon
            reverse
            type="material-community"
            name="plus" 
            color="#f60808"
            containerStyle={styles.btnContainer}
            onPress={goToAddVendedor}
            />
        )}
        </View>
    );    
}
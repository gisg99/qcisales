import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import { collection, onSnapshot, orderBy, Query, query } from "firebase/firestore";
import { screen, db } from "../../../utils";
import { styles } from "./SellersScreen.styles";

export function SellersScreen(props) {
    // const navegar = useNavigation(); Aqui se encuentra la funcion
    // navigation que necesitamos, si estamos en un screen no es
    // necesario importarla pero si fuera en un componente
    const { navigation } = props; //podemos pasar el navigation mediante los props
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
      });
    }, [])

    useEffect(() => {
        const q = query(
            collection(db, "sellers")
        );

        onSnapshot(q, (snapshot) => {
            console.log(snapshot);
        });
    }, [])
    

    const goToAddSeller = () => {
        navigation.navigate(screen.seller.add);
        //navigation.navigate(screen.account.tab, { screen: screen.account.page});
        // Si viajamos a otro tab distinto tenemos que especificar tanto el tab
        // como la pagina a la cual queremos ir de dicho tab
    }
    return (
        <View style={styles.content}>
            <Text>Estamos en la screen Sellers</Text>
            {currentUser && (
                <Icon 
                    reverse
                    type="material-community"
                    name="plus"
                    color="#F07335"
                    containerStyle={styles.btnContainer}
                    onPress={goToAddSeller}
                />
            )}
        </View>
    );
}
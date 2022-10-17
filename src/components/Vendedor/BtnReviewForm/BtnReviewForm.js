import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text, Button } from "react-native-elements";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { query, collection, where, onSnapshot } from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';
import { size } from "lodash";
import { screen, db } from "../../../utils";
import { styles } from './BtnReviewForm.styles';


export function BtnReviewForm(props) {
    const { idVendedor } = props;
    const [hasLogged, setHasLogged] = useState(false);
    const [hasReview, setHasReview] = useState(false);
    const navigation = useNavigation();
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setHasLogged(user ? true : false);
        });
    }, []);

    useEffect(() => {
      if(hasLogged) {
        const q = query(
          collection(db, "reviews"),
          where("idVendedor", "==", idVendedor),
          where("idUser", "==", auth.currentUser.uid)
        );

        onSnapshot(q, (snapshot) => {
          if(size(snapshot.docs) > 0) setHasReview(true);
        });
      }
    }, [hasLogged]);
    

    const goToLogin = () => {
        navigation.navigate(screen.cuenta.tab, {
            screen: screen.cuenta.login,
        });
    };
    
    const goToAddReview = () => {
        navigation.navigate(screen.vendedores.addReviewVendedor, {
            idVendedor,
        });
    };

    if(hasLogged && hasReview) {
      return (
        <View style={styles.content}>
        <Text style={styles.textSendReview}> Ya has realizado una review de este vendedor </Text>
      </View>
      );
    }

  return (
    <View style={styles.content}>
      {hasLogged ? (
        <Button 
        title="Escribe una opinión" 
        icon={{ 
            type: "material-community", 
            name: "square-edit-outline", 
            color: "#f60808" 
        }} 
        buttonStyle={styles.button}
        titleStyle={styles.btnText}
        onPress={goToAddReview}
        />
      ) : (
        <Text style={styles.text} onPress={goToLogin}> 
            Para escribir una opinión es necesario estar logeado. {" "}
            <Text style={styles.textClick} > Pulsa AQUÍ para iniciar sesión. </Text>
        </Text>
      ) }
    </View>
  );
}
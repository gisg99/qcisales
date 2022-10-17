import React from 'react';
import { ScrollView } from 'react-native';
import { Text, Button, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { styles } from "./UserGuestScreen.styles";


export function UserGuestScreen() {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.cuenta.login);
  };
  
  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Image 
      source={require("../../../../assets/img/ejemplousuario.png")} 
      style={styles.image} 
      /> 
      <Text style={styles.title}> Consultar tu perfil </Text>
      <Text style={styles.description}>
        ¿Cómo describirías al mejor vendedor?, busca y visualiza los mejores
        vendedores dentro del CUCEI, de una manera sencilla; vota cuál te agrada
        más y deja tus comentarios. 
      </Text>

        <Button title="Ver mi perfil" 
        onPress={goToLogin} 
        buttonStyle={styles.btnStyle}
        />
    </ScrollView>
  ); 
}
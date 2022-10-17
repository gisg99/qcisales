import React from "react";
import { ScrollView } from "react-native";
import { Text, Button, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils/"
import { styles } from "./GuestScreen.styles";

export function GuestScreen() {
  
  const navigation = useNavigation();
  const goToLogin = () => {
    navigation.navigate(screen.account.login);
  }


  return (
  <ScrollView centerContent={true} style={styles.content}>
    <Image source={require("../../../../assets/img/ejemplousuario.png")} style={styles.image}/>
    <Text style={styles.title}>Consultar tu perfil de Qci $ales</Text>
    <Text style={styles.description}>
      Busca y visualiza los mejores productos de una forma
      sencilla, vota por los que más te gusten y comenta
      cual ha sido tu experiencia.
    </Text>
    <Button title={"Ver tu perfil"} onPress={goToLogin} buttonStyle={styles.btnStyle}/>
  </ScrollView>
  )
}
import React from "react";
import { View } from "react-native";
import { Text, Icon } from "react-native-elements";
import { styles } from "./NotFoundSellers.styles";

export function NotFoundSellers() {
  return (
    <View style={styles.content}>
      <Icon type="material-community" name="alert-outline" size={80}/>
      <Text style={styles.text}>No tienes vendedores en Favoritos</Text>
    </View>
  )
}
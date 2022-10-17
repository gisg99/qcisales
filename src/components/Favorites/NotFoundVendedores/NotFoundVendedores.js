import React from 'react';
import { View } from 'react-native';
import { Text, Icon } from "react-native-elements";
import { styles } from './NotFoundVendedores.styles';


export function NotFoundVendedores() {
  return (
    <View style={styles.content} >
      <Icon type="material-community" name="alert-outline" size={80} />
      <Text style={styles.text}>No tienes vendedores en tu lista</Text>
    </View>
  );
}
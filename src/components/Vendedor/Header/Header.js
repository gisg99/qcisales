import React from 'react';
import { View } from 'react-native';
import { Text, Rating } from "react-native-elements";
import { styles } from './Header.styles';


export function Header(props) {
    const { vendedor } = props;

  return (
    <View style={styles.content} >
      <View style={styles.titleView} >
        <Text style={styles.name} >{vendedor.name}</Text>
        <Rating imageSize={20} readonly startingValue={vendedor.ratingMedia | 0} />
      </View>
      
    </View>
  );
}
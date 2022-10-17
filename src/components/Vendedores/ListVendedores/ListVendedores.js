import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Text, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { styles } from './ListVendedores.styles';

export function ListVendedores(props) {
    const { vendedores } = props;
    const navigation = useNavigation();
    
    const goToVendedor = (vendedor) => {
       navigation.navigate(screen.vendedores.vendedor, {id: vendedor.id});
    }

  return (
      <FlatList
      data={vendedores}
      renderItem={(doc) => {
        const vendedor = doc.item.data();

        return(
            <TouchableOpacity onPress={() => goToVendedor(vendedor)} >

                <View style={styles.vendedores} >
                    <Image 
                    source={{ uri: vendedor.images[0] }} 
                    style={styles.image}
                    />

                    <View>
                        <Text style={styles.name}>{vendedor.name}</Text>
                        <Text style={styles.info}>{vendedor.contact}</Text>
                       
                    </View>
                </View>

            </TouchableOpacity>
        ); 
      }}
      />
  );
}
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Image, Icon, Text } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
import { doc, deleteDoc } from "firebase/firestore";
import { db, screen } from "../../../utils";
import { styles } from './VendedorFavorito.styles';


export function VendedorFavorito(props) {
    const { vendedor } = props;
    const navigation = useNavigation();

    /*const goToVendedor = () => {
        navigation.navigate(screen.vendedores.vendedor, {
            screen: screen.vendedores.vendedor, 
            params: {
                id: vendedor.id,
            },
        });
    };*/
    const goToVendedor = (vendedor) => {
        navigation.navigate(screen.vendedores.vendedor, {id: vendedor.id});
     }

    const onRemoveFavorite = async () => {
        try {
            await deleteDoc(doc(db, "favorites", vendedor.idFavorite));
        } catch (error) {
            console.log(error);
        }
    };


  return (
    <TouchableOpacity onPress={() => goToVendedor(vendedor)}>
      <View style={styles.content}>
        <Image source={{ uri: vendedor.images[0]}} style={styles.image} />
        <View style={styles.infoContent}>
            <Text style={styles.name}>{vendedor.name}</Text>
            <Icon
            type="material-community"
            name="heart"
            color="#f60808"
            size={35}
            containerStyle={styles.iconContainer}
            onPress={onRemoveFavorite}
            />
        </View>
      </View>
    </TouchableOpacity>
  );
}
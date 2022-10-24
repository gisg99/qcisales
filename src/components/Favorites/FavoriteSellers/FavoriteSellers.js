import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Image, Icon, Text } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { doc, deleteDoc } from "firebase/firestore";
import { db, screen } from "../../../utils";
import { styles } from "./FavoriteSellers.styles";

export function FavoriteSellers(props) {
    const { seller } = props;
    const navigation = useNavigation();
  
  const goToSeller = () => {
    navigation.navigate(screen.seller.tab, {
        screen: screen.seller.seller,
        params: {
            id: seller.id,
        }
    })    
  };

  const onRemoveFavorite = async () => {
    try {
        await deleteDoc(doc(db, "favorites", seller.idFavorite))
    } catch (error) {
        console.log(error);
    }
  }

    return (
    <TouchableOpacity onPress={goToSeller}>
      <View style={styles.content}>
        <Image source={{ uri: seller.images[0]}} style={styles.image}/>
        <View style={styles.infoContent}>
            <Text style={styles.name}>{seller.name}</Text>
            <Icon
                type="material-community"
                name="heart"
                color="#F00"
                size={35}
                containerStyle={styles.iconContainer}
                onPress={onRemoveFavorite}
            />
        </View>
      </View>
    </TouchableOpacity>
  )
}
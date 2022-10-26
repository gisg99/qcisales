import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, Rating, Icon } from "react-native-elements";
import { styles } from "./SellersRanking.styles";
import { screen } from "../../../utils";

export function SellersRanking(props) {
    const { seller, index } = props;
    const navigation = useNavigation();

    const goToSeller = () => {
      navigation.navigate(screen.seller.tab, {
          screen: screen.seller.seller,
          params: {
              id: seller.id,
          }
      })    
    };

    const renderMedal = () => {
      if(index > 2) return null;

      let color = "";
      if(index == 0) color = "#FFD700";
      if(index == 1) color = "#BEBEBE";
      if(index == 2) color = "#CD7F32";
      
      return (
        <Icon 
          type="material-community"
          name="medal-outline"
          color= {color}
          containerStyle={styles.medal}
        />
      )
    }

  return (
    <TouchableOpacity onPress={goToSeller}>
        <View style={styles.content}>
            <Image source={{ uri: seller.images[0] }} style={styles.image}/>
            <View style={styles.infoContent}>
              <View style={styles.nameContent}>
                {renderMedal()}
                <Text style={styles.name}>{seller.name}</Text>
              </View>
            <Rating imageSize={15} readonly startingValue={seller.ratingMedia}/>
            </View>
            <Text style={styles.description}>{seller.description}</Text>
        </View>
    </TouchableOpacity> 
  )
}
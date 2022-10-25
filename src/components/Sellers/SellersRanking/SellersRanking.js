import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Image, Text, Rating, Icon } from "react-native-elements";
import { styles } from "./SellersRanking.styles";

export function SellersRanking(props) {
    const { seller, index } = props;
  return (
    <TouchableOpacity onPress={() => console.log("go to scree")}>
        <View style={styles.content}>
            <Image source={{ uri: seller.images[0] }} style={styles.image}/>
            <View style={styles.infoContent}>
                <Text style={styles.name}>{seller.name}</Text>
            <Rating imageSize={15} readonly startingValue={seller.ratingMedia}/>
            </View>
            <Text style={styles.description}>{seller.description}</Text>
        </View>
    </TouchableOpacity>
  )
}
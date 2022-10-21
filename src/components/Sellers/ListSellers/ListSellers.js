import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Text, Image } from "react-native-elements";
import { styles } from "./ListSellers.styles";

export function ListSellers(props) {
    const { sellers } = props;

const goToSeller = (seller) => {
    console.log("Ir al vendedor");
    console.log(seller.name);
}

  return (
    <View>
      <FlatList
        data={sellers}
        renderItem={(doc) => {
            const seller = doc.item.data();

            return (
                <TouchableOpacity
                    onPress={() => goTo(seller)}
                >
                    <View style={styles.sellers}>
                       <Image source={{uri: seller.images[0]}} style={styles.image}/>
                       <View>
                            <Text style={styles.name}>{seller.name}</Text>
                            <Text style={styles.info}>{seller.sellerName}</Text>
                            <Text style={styles.info}>{seller.phone}</Text>
                       </View>
                    </View>
                </TouchableOpacity>
            );
        }}
      />
    </View>
  )
}
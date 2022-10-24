import React from "react";
import { View, Linking } from "react-native";
import { Text, ListItem, Icon, Button} from "react-native-elements";
import { map } from "lodash";
import { styles } from "./Info.styles";


export function Info(props) {
    const { seller } = props;
    const listInfo = [
        {
            text: seller.sellerName,
            iconType: "material-community",
            iconName: "account-outline",
        },
        {
            text: seller.phone,
            iconType: "material-community",
            iconName: "phone",
        },
    ]
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Información sobre el vendedor:</Text>
      {map(listInfo, (item, index) => (
        <ListItem key={index} bottomDivider>
            <Icon type={item.iconType} name={item.iconName} color="#00A680"/>
            <ListItem.Content>
                <ListItem.Title>{item.text}</ListItem.Title>
            </ListItem.Content>
        </ListItem>
      ))}
      <ListItem
        key={"1"}
        bottomDivider
        onPress={ () => Linking.openURL(`https://wa.me/52${seller.phone}?text=¡Hola!%20Vi%20tu%20publicacion%20en%20qci%20sales%20y%20quisiera%20saber%20si%20aun%20tienes%20${seller.name}`)}
        >
            <Icon
            type="material-community"
            name="whatsapp"
            color="#00A680"
                />
            <ListItem.Content>
                <ListItem.Title>Enviar mensaje al vendedor</ListItem.Title>
            </ListItem.Content>
      </ListItem>
    </View>
  )
}
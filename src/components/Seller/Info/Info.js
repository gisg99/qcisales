import React from "react";
import { View } from "react-native";
import { Text, ListItem, Icon} from "react-native-elements";
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
    </View>
  )
}
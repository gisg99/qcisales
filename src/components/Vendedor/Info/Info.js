import React from 'react';
import { View } from 'react-native';
import { Text, ListItem, Icon } from "react-native-elements";
import { map } from "lodash";
import { styles } from './Info.styles';

export function Info(props) {
    const { vendedor } = props;

    const listInfo = [
        {
            text: vendedor.contact,
            iconType: "material-community",
            iconName: "forum",
        },
        {
            text: vendedor.description,
            iconType: "material-community",
            iconName: "information-variant",
        },
    ];


  return (
    <View style={styles.content} >
      <Text style={styles.title} > Información sobre el vendedor </Text>
      {map(listInfo, (item, index) => (
        <ListItem key={index} bottomDivider>
            <Icon type={item.iconType} name={item.iconName} color="#f60808" />
            <ListItem.Content>
                <ListItem.Title>{item.text}</ListItem.Title>
            </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
}
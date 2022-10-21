import { StyleSheet, Dimensions } from "react-native";

const widhtScreen = Dimensions.get("window").width;

export const styles = StyleSheet.create({
    content: {
        marginBottom: 20,
    },
    image: {
        height: 200,
        width: widhtScreen,
    },
});
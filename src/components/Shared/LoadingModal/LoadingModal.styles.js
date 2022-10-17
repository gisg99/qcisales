import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
   overlay: {
    height: 100,
    width: 200,
    backgroundColor: "#FFF",
    borderColor: "#F07335",
    borderWidth: 2,
    borderRadius: 10,
   },
   view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
   },
   text: {
    color: "#F07335",
    textTransform: "uppercase",
    marginTop: 10,
   }
})
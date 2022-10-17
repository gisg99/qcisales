import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function FavoritosStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={screen.favoritos.favoritos} component={FavoritesScreen} options={{title: "Favoritos"}} />
        </Stack.Navigator>
    )
}
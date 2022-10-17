import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchScreen } from "../screens/SearchScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function SearchStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name={screen.search.page}
            component={SearchScreen}
            options={{title: screen.search.name}}
            />
        </Stack.Navigator>
    );
}
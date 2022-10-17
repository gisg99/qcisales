import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RankingScreen } from "../screens/RankingScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function RankingStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name={screen.ranking.page}
            component={RankingScreen}
            options={{title: screen.ranking.name}}
            />
        </Stack.Navigator>
    );
}
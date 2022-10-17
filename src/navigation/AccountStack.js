import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen } from "../screens/Account/AccountScreen";
import { LoginScreen } from "../screens/Account/LoginScreen";
import { RegisterScreen } from "../screens/Account/RegisterScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function AccountStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name={screen.account.page}
            component={AccountScreen}
            options={{title: screen.account.name}}
            />
            <Stack.Screen
            name={screen.account.login}
            component={LoginScreen}
            options={{title: screen.account.loginName}}
            />
            <Stack.Screen
            name={screen.account.register}
            component={RegisterScreen}
            options={{title: screen.account.registerName}}
            />
        </Stack.Navigator>
    );
}
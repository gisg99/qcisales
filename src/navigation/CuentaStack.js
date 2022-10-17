import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen } from "../screens/Account/AccountScreen";
import { LoginScreen } from "../screens/Account/LoginScreen";
import { RegisterScreen } from "../screens/Account/RegisterScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function CuentaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={screen.cuenta.cuenta} 
            component={AccountScreen} 
            options={{title: "Cuenta"}} 
            />
            <Stack.Screen name={screen.cuenta.login}
            component={LoginScreen}
            options={{title: "Iniciar sesión"}}
            />
            <Stack.Screen name={screen.cuenta.register}
            component={RegisterScreen}
            options={{title: "Crear cuenta"}}
            />

        </Stack.Navigator>
    )
}
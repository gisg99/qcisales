import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { VendedoresScreen } from "../screens/Vendedores/VendedoresScreen";
import { AddVendedorScreen } from "../screens/Vendedores/AddVendedorScreen";
import { VendedorScreen } from "../screens/Vendedores/VendedorScreen";
import { AddReviewVendedorScreen } from "../screens/Vendedores/AddReviewVendedorScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function VendedoresStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name={screen.vendedores.vendedores} 
            component={VendedoresScreen} 
            options={{title: "Vendedores"}} 
            />
            <Stack.Screen 
            name={screen.vendedores.addVendedor} 
            component={AddVendedorScreen} 
            options={{title: "Nuevo vendedor"}} 
            />
            <Stack.Screen 
            name={screen.vendedores.vendedor} 
            component={VendedorScreen} 
            options={{title: "Vendedor"}} 
            />
            <Stack.Screen 
            name={screen.vendedores.addReviewVendedor} 
            component={AddReviewVendedorScreen} 
            options={{title: "Nueva opinión"}} 
            />
        </Stack.Navigator>
    );
}
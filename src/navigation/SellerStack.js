import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SellersScreen } from "../screens/Sellers/SellersScreen";
import { AddSellerScreen } from "../screens/Sellers/AddSellerScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();


export function SellerStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name={screen.seller.page}
                component={SellersScreen}
                options={{title: "Vendedores"}}
            />
            <Stack.Screen
                name={screen.seller.add}
                component={AddSellerScreen}
                options={{title: "Nuevo Vendedor"}}
            />
        </Stack.Navigator>
    )
    
}
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { VendedoresStack } from "./VendedorStack"
import { FavoritosStack } from "./FavoritosStack";
import { RankingStack } from "./RankingStack";
import { BuscarStack } from "./BuscarStack";
import { CuentaStack } from "./CuentaStack";
import { screen } from "../utils";


const Tab = createBottomTabNavigator();

export function AppNavigation() {
    return (
        <Tab.Navigator screenOptions={ ({route}) => ({
                headerShown: false,
                tabBarActiveTintColor: "#f60808",
                tabBarInactiveTintColor: "#646464",
                tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
            })}
            >
            <Tab.Screen name={screen.vendedores.tab} component={VendedoresStack} options={{ title: "Vendedores" }} />
            <Tab.Screen name={screen.favoritos.tab} component={FavoritosStack} options={{ title: "Favoritos" }}/>
            <Tab.Screen name={screen.ranking.tab} component={RankingStack} options={{ title: "Ranking" }}/>
            <Tab.Screen name={screen.buscar.tab} component={BuscarStack} options={{ title: "Buscar" }}/>
            <Tab.Screen name={screen.cuenta.tab} component={CuentaStack} options={{ title: "Cuenta" }}/>
        </Tab.Navigator>
    );
}

function screenOptions(route, color, size) {
    let iconName;

    if(route.name === screen.vendedores.tab) {
        iconName = "shopping-outline";
    }

    if(route.name === screen.favoritos.tab) {
        iconName = "heart-outline";
    }

    if(route.name === screen.ranking.tab) {
        iconName = "star-outline";
    }

    if(route.name === screen.buscar.tab) {
        iconName = "magnify";
    }

    if(route.name === screen.cuenta.tab) {
        iconName = "account-circle-outline";
    }

    return (
        <Icon type="material-community"  name={iconName} color={color} size={size} />
    );
}
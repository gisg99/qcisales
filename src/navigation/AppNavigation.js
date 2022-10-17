import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { SellerStack } from "./SellerStack";
import { FavoritesStack } from "./FavoritesStack";
import { RankingStack } from "./RankingStack";
import { SearchStack } from "./SearchStack";
import { AccountStack } from "./AccountStack";
import { screen } from "../utils";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
    return (
        <Tab.Navigator screenOptions={({route}) => (
            {
                headerShown: false,
                tabBarActiveTintColor: "#F07335",
                tabBarInactiveTintColor: "#646464",
                tabBarIcon: ({ color, size }) => tabIconOptions(route, color, size),
            }
        )}>
            <Tab.Screen
            name={screen.seller.tab}
            component={SellerStack}
            options={{title: screen.seller.name}}
            />
            <Tab.Screen
            name={screen.favorites.tab}
            component={FavoritesStack}
            options={{title: screen.favorites.name}}
            />
            <Tab.Screen
            name={screen.ranking.tab}
            component={RankingStack}
            options={{title: screen.ranking.name}}
            />
            <Tab.Screen
            name={screen.search.tab}
            component={SearchStack}
            options={{title: screen.search.name}}
            />
            <Tab.Screen
            name={screen.account.tab}
            component={AccountStack}
            options={{title: screen.account.name}}
            />
        </Tab.Navigator>
    );
}

function tabIconOptions(route, color, size) {
    let iconName;

    if(route.name === screen.seller.tab){
        iconName = "storefront-outline";
    }
    else if(route.name === screen.favorites.tab){
        iconName = "heart-outline";
    }
    else if(route.name === screen.ranking.tab){
        iconName = "star-outline";
    }
    else if(route.name === screen.search.tab){
        iconName = "magnify";
    }
    else{
        iconName = "account-circle-outline";
    }

    return (
        <Icon type="material-community" name={iconName} color={color} size={size}/>
    )
}

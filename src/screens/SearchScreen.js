import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import { SearchBar, ListItem, Avatar, Icon } from "react-native-elements";
import { collection, query, startAt, endAt, limit, orderBy, getDocs } from "firebase/firestore";
import { db } from "../utils";
import { size } from "lodash";
import { Loading } from "../components/Shared";

export function SearchScreen() {
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState(null);
    console.log(size(searchResults));
    
    useEffect(() => {
      (async () => {
        const q = query(
            collection(db, "sellers"),
            orderBy("name"),
            startAt(searchText),
            endAt(`${searchText}\uf8ff`),
            limit(20)
        )

        const querySnapshot = await getDocs(q);
        setSearchResults(querySnapshot.docs);
      })()
    }, [searchText])
    
    
    return (
        <View>
            <SearchBar
                placeholder="Busca un vendedor"
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
            />
            {!searchResults && <Loading show text="Cargando"/>}
        </View>
    )
}
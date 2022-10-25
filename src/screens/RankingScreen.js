import React, { useState, useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { map } from "lodash";
import { SellersRanking } from "../components/Sellers";
import { db } from "../utils";

export function RankingScreen() {
    const [sellers, setSellers] = useState(null)

    useEffect(() => {
      const q = query(
        collection(db, "sellers"),
        orderBy("ratingMedia", "desc"),
        limit(5)
      );
      onSnapshot(q, (snapshot) => {
        setSellers(snapshot.docs);
      })
    }, [])
    

    return (
        <ScrollView>
            {map(sellers, (seller, index) => (
                <SellersRanking
                    key={index}
                    index={index}
                    seller={seller.data()}
                />
            ))}
        </ScrollView>
    )
}
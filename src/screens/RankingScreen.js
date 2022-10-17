import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { map } from "lodash";
import { VendedorRanking } from "../components/Vendedores";
import { db } from "../utils";

export function RankingScreen() {
  const [vendedores, setVendedores] = useState(null);

  useEffect(() => {
    const q = query(
      collection(db, "vendedores"),
      orderBy("ratingMedia", "desc"),
      limit(5),
    );

    onSnapshot(q, (snapshot) => {
      setVendedores(snapshot.docs);
    });
  }, []);
  

  return (
    <ScrollView>
      {map(vendedores, (vendedor, index) => (
        <VendedorRanking  
        key={index}
        index={index}
        vendedor={vendedor.data()}
        />

      ))}
    </ScrollView>
  );
}
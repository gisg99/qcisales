import React, { useState, useEffect } from "react";
import { ScrollView, Dimensions } from "react-native";
import { doc, onSnapshot, collection, query, where, orderBy } from "firebase/firestore";
import { Carousel, Loading } from "../../../components/Shared";
import { db } from "../../../utils";
import { styles } from "./SellerScreen.styles";

const { width } = Dimensions.get("window");

export function SellerScreen(props) {
    const { route } = props;
    const [seller, setSeller] = useState(null)
    
    useEffect(() => {
      setSeller(null);
      onSnapshot(doc(db, "sellers", route.params.id), (doc) => {
        setSeller(doc.data());
      })
    }, [route.params.id])
    
    if(!seller) return <Loading show text="Cargando vendedor"/>;

  return (
    <ScrollView style={styles.content}>
      <Carousel arrayImages={seller.images} height={250} width={width}/>
    </ScrollView>
    )
}
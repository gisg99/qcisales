import React, { useState, useEffect } from "react";
import { ScrollView, Dimensions } from "react-native";
import { doc, onSnapshot} from "firebase/firestore";
import { Carousel, Loading } from "../../../components/Shared";
import { Header, Info, BtnReviewForm, ReviewsList, BtnFavorite } from "../../../components/Seller";
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
      <Header seller={seller}/>
      <Info seller={seller}/>
      <ReviewsList idSeller={route.params.id}/>
      <BtnReviewForm idSeller={route.params.id}/>
      <BtnFavorite idSeller={route.params.id}/>
    </ScrollView>
    )
}
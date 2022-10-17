import React, { useState, useEffect } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { doc, onSnapshot, } from "firebase/firestore";
import { Carousel, Loading } from "../../../components/Shared";
import { Header, Info, BtnReviewForm, Reviews, BtnFavorite } from "../../../components/Vendedor";
import { db } from "../../../utils";
import { styles } from './VendedorScreen.styles';

const { width } = Dimensions.get("window");

export function VendedorScreen(props) {
    const { route } = props;
    const [vendedor, setVendedor] = useState(null);  
    //console.log(vendedor); 

    useEffect(() => {
      setVendedor(null);
      onSnapshot(doc(db, "vendedores", route.params.id), (doc) => {
        setVendedor(doc.data());
      });
    }, [route.params.id]);
    
    //console.log(route.params);
    if (!vendedor) return <Loading show text="Cargando vendedor" />;

  return (
    <ScrollView style={styles.content}>
      <Carousel arrayImages={vendedor.images} height={250} width={width} />
      <Header vendedor={vendedor} />
      <Info vendedor={vendedor} />
      <BtnReviewForm idVendedor={route.params.id} />
      <Reviews idVendedor={route.params.id} />
      <BtnFavorite idVendedor={route.params.id} />
    </ScrollView>
  );
}
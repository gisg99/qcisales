import React from "react";
import { View } from "react-native";
import { AirbnbRating, Input, Button } from "react-native-elements";
import { useFormik } from "formik";
import Toast from "react-native-toast-message";
import { doc, setDoc, query, collection, where, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../../utils";
import { getAuth } from "firebase/auth";
import { v4 as uuid } from "uuid";
import { map, mean } from "lodash";
import { useNavigation } from "@react-navigation/native";
import { initialValues, validationSchema } from "./AddReviewScreen.data";
import { styles } from "./AddReviewScreen.styles";

export function AddReviewScreen(props) {
    const { route } = props;
    const navigation = useNavigation();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                const auth = getAuth();
                const idDoc = uuid();
                const newData = formValue;
                newData.id = idDoc;
                newData.idSeller = route.params.idSeller;
                newData.idUser = auth.currentUser.uid;
                newData.avatar = auth.currentUser.photoURL;
                newData.createdAt = new Date();

                await setDoc(doc(db, "reviews", idDoc), newData);
                await updateSeller();
            } catch (error) {
              console.log(error);
              Toast.show({
                type: "error",
                positon: "bottom",
                text1: "Error al enviar la review",
              });
            }
        }
    });

    const updateSeller = async () => {
      const q = query(
      collection(db, "reviews"),
      where("idSeller", "==", route.params.idSeller)
      );
      onSnapshot(q, async (snapshot) => {
        const reviews = snapshot.docs;
        const arrayStars = map(reviews, (review) => review.data().rating);
        const media = mean(arrayStars);
        const sellerRef = doc(db, "sellers", route.params.idSeller);
        await updateDoc(sellerRef, {
          ratingMedia: media,
        });
        navigation.goBack();
      });
    };
    
  return (
    <View style={styles.content}>
      <View>
        <View style={styles.ratingContent}>
            <AirbnbRating
                count={5}
                reviews={["Pésimo", "Malo", "Normal", "Muy Bueno", "Excelente"]}
                defaultRating={formik.values.rating}
                size={35}
                onFinishRating={(rating) => formik.setFieldValue("rating", rating)}
            />
        </View>
        <View>
            <Input
                placeholder="Título"
                onChangeText={(text) => formik.setFieldValue("title", text)}
                errorMessage={formik.errors.title}
            />
            <Input
                placeholder="Comentario"
                multiline
                inputContainerStyle={styles.comment}
                onChangeText={(text) => formik.setFieldValue("comment", text)}
                errorMessage={formik.errors.comment}
            />
        </View>
      </View>
      <Button
        title="Enviar reseña"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  )
}
import React from "react";
import { ScrollView, Text } from "react-native";
import { Button } from "react-native-elements";
import { useFormik } from "formik";
import { v4 as uuid } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { useNavigation} from "@react-navigation/native";
import { InfoForm, UploadImagesForm, ImageSeller } from "../../../components/Sellers/AddSeller";
import { db } from "../../../utils"
import { initialValues, validationSchema } from "./AddSellerScreen.data";
import { styles } from "./AddSellerScreen.styles";

export function AddSellerScreen() {
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const newData = formValue;
        newData.id = uuid();
        newData.createdAt = new Date();
        
        await setDoc(doc(db, "sellers", newData.id), newData);

        navigation.goBack();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageSeller formik={formik}/>
      <InfoForm formik={formik}/>
      <UploadImagesForm formik={formik}/>
      <Button
        title="Crear Vendedor"
        buttonStyle={styles.AddSeller}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </ScrollView>
  );
}
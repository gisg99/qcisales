import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from "react-native-elements";
import { useFormik } from 'formik';
import { v4 as uuid } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';
import { InfoForm, UploadImageForm, ImageVendedor } from "../../../components/Vendedores/AddVendedor";
import { db } from '../../../utils';
import { initialValues, validationSchema } from "./AddVendedorScreen.data";
import { styles } from "./AddVendedorScreen.styles";


export function AddVendedorScreen() {
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

        await setDoc( doc(db, "vendedores", newData.id), newData);

        navigation.goBack();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <ImageVendedor formik={formik} />
      <InfoForm formik={formik} />

      <UploadImageForm formik={formik} />

      <Button 
      title="Crear vendedor" 
      buttonStyle={styles.addVendedor} 
      onPress={formik.handleSubmit} 
      loading={formik.isSubmitting}
      />
    </ScrollView>
  );
}
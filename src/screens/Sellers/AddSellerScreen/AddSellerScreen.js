import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { useFormik } from "formik";
import { InfoForm } from "../../../components/Sellers/AddSeller/InfoForm";
import { initialValues, validationSchema } from "./AddSellerScreen.data";
import { styles } from "./AddSellerScreen.styles";

export function AddSellerScreen() {

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue);
    },
  });
  return (
    <View>
      <InfoForm formik={formik}/>
      <Button
        title="Crear Vendedor"
        buttonStyle={styles.AddSeller}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
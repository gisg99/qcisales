import React from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";
import { styles } from "./InfoForm.styles";


export function InfoForm(props) {
    const { formik } = props;

  return (
    <View style={styles.content}>
        <Input
            placeholder="Nombre del Negocio"
            onChangeText={(text) => formik.setFieldValue("name")}
            errorMessage={formik.errors.name}
        />
        <Input
            placeholder="Nombre del vendedor"
            onChangeText={(text) => formik.setFieldValue("sellerName")}
            errorMessage={formik.errors.sellerName}
        />
        <Input
            placeholder="Teléfono (10 dígitos)"
            onChangeText={(text) => formik.setFieldValue("phone")}
            errorMessage={formik.errors.phone}
        />
        <Input
            placeholder="Descripción"
            multiline={true}
            inputContainerStyle={styles.textArea}
            onChangeText={(text) => formik.setFieldValue("description")}
            errorMessage={formik.errors.description}
        />
    </View>
  )
}
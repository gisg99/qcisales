import React from 'react';
import { View } from 'react-native';
import { Input } from "react-native-elements";
import { styles } from "./InfoForm.styles";


export function InfoForm(props) {
  const { formik } = props;

  return (
    <View style={styles.content} >
      <Input 
      placeholder="Nombre del vendedor" 
      onChangeText={(text) => formik.setFieldValue("name", text)}
      errorMessage={formik.errors.name}
      />
      <Input 
      placeholder="Contacto" 
      onChangeText={(text) => formik.setFieldValue("contact", text)}
      errorMessage={formik.errors.contact}/>
      <Input 
      placeholder="Descripción del vendedor" 
      multiline={true} 
      inputContainerStyle={styles.textArea} 
      onChangeText={(text) => formik.setFieldValue("description", text)}
      errorMessage={formik.errors.description}
      />
    </View>
  );
}
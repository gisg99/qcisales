import React, { useState } from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import { useFormik } from "formik";
import { getAuth, updatePassword, EmailAuthProvider, reauthenticateWithCredential} from "firebase/auth";
import Toast from "react-native-toast-message";
import { styles } from "./ChangePasswordForm.styles";
import { initialValues, validationSchema } from "./ChangePasswordForm.data";

export function ChangePasswordForm(props) {

    const { onClose } = props;
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const onShowPassword = () => setShowPassword((prevState) => !prevState);
    const onShowNewPassword = () => setShowNewPassword((prevState) => !prevState);
    const auth = getAuth();
    const currentUser = auth.currentUser;

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                reauthenticate(formValue.password).then(async () => {
                    await updatePassword(currentUser ,formValue.newPassword).then(() => {
                        console.log("Password updated");
                        onClose();
                    }).catch((error) => {
                        console.log(error);
                        Toast.show({
                            type: "error",
                            position: "bottom",
                            text1: "Error al cambiar la contraseña",
                        });
                    });
                }).catch((error) => {
                    console.log(error);
                    Toast.show({
                        type: "error",
                        position: "bottom",
                        text1: "La contraseña actual es incorrecta",
                    });
                });
            } catch (error) {
                console.log(error);
                Toast.show({
                    type: "error",
                    position: "bottom",
                    text1: "Error al cambiar la contraseña",
                });
            }

            // changePassword = (currentPassword, newPassword) => {
            //    this.reauthenticate(currentPassword).then(() => {
            //        var user = firebase.auth().currentUser;
            //        user.updatePassword(newPassword).then(() => {
            //            console.log("Password updated!");
            //        }).catch((error) => { console.log(error); });
            //    }).catch((error) => { console.log(error); });
            // }

        }
    });

    const reauthenticate = (password) => {
      const credentials = EmailAuthProvider.credential(
          currentUser.email,
          password,
      );
      return reauthenticateWithCredential(currentUser, credentials);
    }

  return (
    <View style={styles.content}>
      <Input
      placeholder="Contraseña actual"
      containerStyle={styles.input}
      secureTextEntry={showPassword ? false : true}
      rightIcon={{
        type: "material-community",
        name: showPassword ? "eye-outline" : "eye-off-outline",
        color: "#C2C2C2",
        onPress: onShowPassword,
      }}
      onChangeText={(text) => formik.setFieldValue("password", text)}
      errorMessage={formik.errors.password}
      />
      <Input
      placeholder="Contraseña nueva"
      containerStyle={styles.input}
      secureTextEntry={showNewPassword ? false : true}
      rightIcon={{
        type: "material-community",
        name: showNewPassword ? "eye-outline" : "eye-off-outline",
        color: "#C2C2C2",
        onPress: onShowNewPassword,
      }}
      onChangeText={(text) => formik.setFieldValue("newPassword", text)}
      errorMessage={formik.errors.newPassword}
      />
      <Input
      placeholder="Repetir contraseña nueva"
      containerStyle={styles.input}
      secureTextEntry={showNewPassword ? false : true}
      rightIcon={{
        type: "material-community",
        name: showNewPassword ? "eye-outline" : "eye-off-outline",
        color: "#C2C2C2",
        onPress: onShowNewPassword,
      }}
      onChangeText={(text) => formik.setFieldValue("newPasswordC", text)}
      errorMessage={formik.errors.newPasswordC}
      />
      <Button
        title="Cambiar"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  )
}
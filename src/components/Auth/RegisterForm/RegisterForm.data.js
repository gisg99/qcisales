import * as Yup from "yup";

export function initialValues() {
    return {
        email: "",
        password: "",
        repeatPassword: "",
    };
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string().email("El email no es válido").required("El email es obligatorio"),
        password: Yup.string().min(6, 'Mínimo 6 caracteres').required("La contraseña es obligatoria"),
        repeatPassword: Yup.string().min(6, 'Mínimo 6 caracteres').required("La contraseña es obligatoria").oneOf([Yup.ref("password")],"Las contraseñas tienen que ser iguales"),
    });
}
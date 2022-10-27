import * as Yup from "yup";

export function initialValues() {
    return {
        password: "",
        newPassword: "",
        newPasswordC: "",
    };
}

export function validationSchema() {
    return Yup.object({
        password: Yup.string().required("La contraseña actual es obligatoria"),
        newPassword: Yup.string().min(6, 'Mínimo 6 carácteres').max(20, 'Máximo 20 carácteres').required("La nueva contraseña es obligatoria"),
        newPasswordC: Yup.string().min(6, 'Mínimo 6 carácteres').max(20, 'Máximo 20 carácteres').required("La confirmación de contraseña es obligatoria").oneOf([Yup.ref("newPassword")],"Las contraseñas nuevas tienen que ser iguales"),
    });
}
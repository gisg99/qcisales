import * as Yup from "yup";

export function initialValues() {
    return {
        name: "",
        contact: "",
        description: "",
        images: [],
    };
}

export function validationSchema() {
    return Yup.object({
        name: Yup.string().required("Campo obligatorio"),
        contact: Yup.string().required("Campo obligatorio"),
        description: Yup.string().required("Campo obligatorio"),
        images: Yup.array().min(1, "Se requiere una imagen como mínimo").required("La imagen es requerida"),
    });
}
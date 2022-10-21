import * as Yup from "yup";

export function initialValues() {
    return {
        name: "",
        sellerName: "",
        phone: "",
        description: "",
        images: [],
    };
}

export function validationSchema() {
    return Yup.object({
        name: Yup.string().required("Campo obligatorio"),
        sellerName: Yup.string().required("Campo obligatorio"),
        phone: Yup
            .number()
            .typeError("Eso no parece un numero de teléfono")
            .positive("El numero no puede incluir símbolos")
            .integer("El numero no puede incluir símbolos")
            .min(1000000000, "El numero debe incluir 10 caracteres exactos")
            .max(9999999999, "El numero debe incluir 10 caracteres exactos")
            .required("Campo obligatorio"),
        description: Yup.string().required("Campo obligatorio"),
        images: Yup.array().min(1, "Se requiere una imagen como mínimo").required("La imagen es obligatoria"),
    })
}
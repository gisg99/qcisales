import * as Yup from "yup";

export function initialValues() {
    return {
        name: "",
        sellerName: "",
        phone: "",
        description: "",
    };
}

export function validationSchema() {
    return Yup.object({
        name: Yup.string().required("Campo obligatorio"),
        sellerName: Yup.string().required("Campo obligatorio"),
        phone: Yup.number().typeError("Eso no parece un numero de teléfono").positive("El numero no puede incluir símbolos").integer("El numero no puede incluir símbolos").required("Campo obligatorio"),
        description: Yup.string().required("Campo obligatorio"),
    })
}
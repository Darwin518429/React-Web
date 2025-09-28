import React from "react"
import { Secciones, Formulario } from "../cr";
function Mas() {
    return (
        <>
            <h1>¡Contáctanos!</h1>
            <p>Si tienes preguntas, sugerencias o necesitas más información, no dudes en comunicarte con nosotros. Estamos aquí para ayudarte.</p>
            <Secciones
                tipo="h1"
                titulo="Información de Contacto"
                descripcion="Puedes contactarnos a través del siguiente formulario o por nuestros canales oficiales."

            />
            <Formulario />
        </>
    );

}
export default Mas
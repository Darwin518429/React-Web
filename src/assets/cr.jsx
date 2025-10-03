// componentespara reutilizar 
import React, { useState } from "react";
/*Importamos modulos para el slider  */
import Slider from "react-slick/lib/slider"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/*--------------------------------------------- */

//formulario pocho
export function Formulario() {
    const [boton, setboton] = useState("");
    function alerta() {
        setboton(alert("Formulario enviado"));
    }

    return (
        <>
            <form className="formulario">
                <label > Nombre </label>
                <input id="nombre" type="text" placeholder="Tu nombr ej: pepe" required />

                <label  > Correo </label>
                <input type="email" id="correo" placeholder="Tu nombr ej: pepe" required />
                <textarea  required rows="15" placeholder="Escribe tu mensaje aqui..."></textarea>
                <button  type="submit"  onClick={alerta} >Enviar</button>
                
            </form>
            <br/>
        </>);

}


export function Galeria({ imagenes }) {
    //.map reocrre el array el primer vflaor es el elemento y el segundo el indice(su posicion)
    return (
        imagenes.map((img, index) => (
            <img key={index} src={img} />))
    );

}

export function Carrusel({ imagenes }) {
    //Objeto que  viene incluido slider  
    const settings = {
        dots: true,
        infinite: true, //ESTO INDICA QUE GIRARAN INFINITAMENTE
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, //VELOCIDAD QUE PASARA LA IMGEN 

    }
    return (<>
        <Slider className="contenedor-carrusel" {...settings} >
            {imagenes.map((img, index) => (
                <div key={index}>
                    <img className="carrusel" src={img} />
                </div>
            ))}

        </Slider>
    </>);
}

// el parametro children renderizara lo que haya adentro de el
export function Fondoestatico({ url, altura, children }) {
    // Lo hago desde aqui pa reutilizar 
    const estilos = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        height: `${altura}`,
    }


    return (
        <div className="fondo-estatico" style={estilos}>
            {children} {/* mete contenido dentro de un componente como si fuera una “ranura”. */}
        </div>);
}

export function Secciones({ tipo, titulo, desc }) {
    const Tag = tipo; // para poder especificar que elemento quiero debe de  empezar con mayuscula
    return (
        <>
            <Tag>{titulo}</Tag>
            <p>{desc}</p>

        </>);
}
// su valor predeterminado sera null o sea la nada lo ocupara por si no le pasamos nada
export function Tarjetas({ titulo, desc, url, children = null }) {
    return (

        <div className="tarjeta">
            <img src={url} />
            <h3>{titulo}</h3>
            <p>{desc}</p>
            {children}
        </div>

    );
}
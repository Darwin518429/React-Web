import React from "react"
import { Fondoestatico, Secciones, Tarjetas, Carrusel } from "../cr";


function Incio() {

    const imagenes = [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
    ];

    return (
        <>
            <Fondoestatico url="./imgs/grupo.jpg" altura={"600px"} >
                <div className="bloque">
                    <Secciones
                        tipo="h1"
                        titulo="Bienvenidos a la página de los Pepes"
                        desc="¡Bienvenido a la comunidad de los Pepes! Aquí celebramos la creatividad, el entusiasmo y el espíritu colaborativo de todos nuestros miembros. Descubre información relevante, participa en actividades, y forma parte de una red que fomenta el respeto, la inclusión y el crecimiento personal. Únete a nosotros para desarrollar nuevas habilidades, ampliar tu red de contactos y contribuir con tus ideas y talentos. Los Pepes se caracterizan por su solidaridad y disposición para ayudar a los demás. Explora nuestra galería, conoce testimonios y resuelve tus dudas en la sección de preguntas frecuentes. ¡Te esperamos para que seas parte de esta gran familia!"
                    />
                </div>
            </Fondoestatico>


            <section>
                <Secciones
                    tipo="h2"
                    titulo="¿Quiénes son los Pepes?"
                    desc="Los Pepes son personas únicas que destacan por su creatividad y entusiasmo. Aquí encontrarás información relevante sobre ellos.
                Su espíritu colaborativo y su pasión por aprender los convierte en miembros valiosos de cualquier grupo.
                La comunidad fomenta el respeto, la inclusión y el crecimiento personal de cada integrante.
                Participar en actividades de los Pepes te permite desarrollar nuevas habilidades y ampliar tu red de contactos.
                Además, los Pepes se caracterizan por su solidaridad y disposición para ayudar a los demás.
                Descubre cómo puedes formar parte de este grupo dinámico y contribuir con tus ideas y talentos."
                />
                <div className="ordenar">
                    <Tarjetas
                        titulo="Diseño Web"
                        desc="Creamos sitios web modernos y funcionales para tu negocio."
                        url="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                    >
                        <ul><li>1-web:10€</li>

                        </ul>
                    </Tarjetas>
                    <Tarjetas
                        titulo="Marketing Digital"
                        desc="Impulsa tu marca con estrategias de marketing digital efectivas."
                        url="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                    />
                    <Tarjetas
                        titulo="Fotografía Profesional"
                        desc="Capturamos momentos únicos con fotografía de alta calidad."
                        url="https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
                    />
                    <Tarjetas
                        titulo="Desarrollo de Apps"
                        desc="Desarrollamos aplicaciones móviles personalizadas para tus necesidades."
                        url="https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
                    />
                    <Tarjetas
                        titulo="Consultoría IT"
                        desc="Te asesoramos en tecnología para optimizar tus procesos."
                        url="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
                    />
                    <Tarjetas
                        titulo="Edición de Video"
                        desc="Editamos videos profesionales para tus proyectos y eventos."
                        url="https://images.unsplash.com/photo-1508672019048-805c876b67e2"
                    />
                    <Tarjetas
                        titulo="Soporte Técnico"
                        desc="Solucionamos problemas técnicos y brindamos asistencia personalizada."
                        url="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
                    />
                    <Tarjetas
                        titulo="Redacción de Contenidos"
                        desc="Creamos textos atractivos y originales para tu sitio web o blog."
                        url="https://images.unsplash.com/photo-1465101178521-c1a4c8a0a8b7"
                    />
                    <Tarjetas
                        titulo="Gestión de Redes Sociales"
                        desc="Administramos y potenciamos tu presencia en redes sociales."
                        url="https://images.unsplash.com/photo-1503676382389-4809596d5290"
                    />
                </div>
            </section>
            <section>
                <Secciones
                    tipo="h2"
                    titulo="Galería de Pepes"
                    desc="Explora imágenes y momentos destacados de los Pepes en nuestra galería exclusiva.
                Cada fotografía cuenta una historia y refleja la diversidad de experiencias dentro de la comunidad."
                />
                <Carrusel imagenes={imagenes} />
            </section>

        </>
    );


}
export default Incio
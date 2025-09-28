import React from "react";
import { Secciones, Galeria } from "../cr";

function Productos() {

  const imagenes = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", // Bosque
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80", // Ciudad
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80", // Montañas
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80", // Playa
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", // Desierto
    "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=80",  // Campo

    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80", // Montañas
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80", // Playa
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", // Desierto
    "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=80"  // Campo

  ];

  return (
    <>
      <section>
        <Secciones
          tipo="h1"
          titulo="Productos"
          desc="Estos son nuestros productos. Aquí encontrarás una amplia variedad de artículos cuidadosamente seleccionados para satisfacer todas tus necesidades. Desde productos innovadores hasta los clásicos de siempre, nuestro catálogo está en constante actualización para ofrecerte lo mejor del mercado. Explora nuestras categorías, compara características y elige lo que más se adapte a tus preferencias. Nuestro compromiso es brindarte calidad, buen precio y una experiencia de compra excepcional. ¡Descubre todo lo que tenemos para ti y haz tu pedido hoy mismo!"
        />

        <div className="galeria-fotos">
          <Galeria imagenes={imagenes} />
        </div>
      </section>
    </>
  );
}

export default Productos;
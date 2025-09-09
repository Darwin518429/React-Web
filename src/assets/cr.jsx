// componentespara reutilizar 
import React from "react"
export function Fondoestatico ({url}){
return(<img className="fondo-estatico" src={url}/>);
}

export function Tarjetas ({titulo, desc , url}){
return(
    <>
    <div className="tarjeta">
        <img src={url} />
        <h2>{titulo}</h2>
        <p>{desc}</p>
    </div>
    </>
);
}
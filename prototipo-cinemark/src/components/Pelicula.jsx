import React from "react";
import '../componentsStyles/Pelicula.css';

function Pelicula(props) {
    return (
        <div className="pelicula bg_primario">
            <img id="portadaPelicula" src={require(`../images/${props.nombre}Pelicula.jpg`)} alt="Clic para seleccionar la pelicula {props.nombre}" />
            <div className="btn_horarios bg_terciario">
                VER HORARIOS
            </div>
        </div>
    );
}

export default Pelicula;
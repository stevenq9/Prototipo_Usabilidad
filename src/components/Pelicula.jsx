import React from "react";
import '../componentsStyles/Pelicula.css';

function Pelicula(props) {
    return (
        <div className="pelicula bg_primario">
            <img role="img" tabIndex="0" className="portadaPelicula" src={require(`../images/${props.nombre}Pelicula.jpg`)} alt="Clic para seleccionar la pelicula {props.nombre}" />
            <div role="button" tabIndex="0" className="btn_horarios bg_terciario">
                <a className="txt_primario"  href="/horarios" title="Enlace a los horarios de la película">
                    VER HORARIOS
                </a>
            </div>
        </div>
    );
}

export default Pelicula;
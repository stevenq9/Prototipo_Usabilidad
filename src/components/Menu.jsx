import React from 'react';
import '../componentsStyles/Menu.css';

function Menu() {
    return (
        <menu tabIndex="0" className="row txt_primario ">
            <div className="col-3 d-flex align-items-center">
                <a href="/">
                    <img tabIndex="1" src={require('../logos/Cinemark_Logo.svg.png')} alt="Logo Cinemark" />
                </a>
            </div>
            <div className="col-8 d-flex align-items-center">
                <ul>
                    <li tabIndex="2" >CARTELERA</li>
                    <li tabIndex="3" >TEATROS</li>
                    <li tabIndex="4" >SNACKBAR</li>
                    <li tabIndex="5" >PROMOCIONES</li>
                    <li tabIndex="6" >PREVENTA</li>
                </ul>
            </div>
        </menu >
    );
}

export default Menu;
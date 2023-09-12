import React from 'react';
import '../componentsStyles/Menu.css';

function Menu() {
    return (
        <nav role="navigation" className="menu row txt_primario">
            <div className="col-3 d-flex align-items-center">
                <a href="/"  title="Enlace página de inicio Cinemark">
                    <img role='img' tabIndex="0" src={require('../logos/Cinemark_Logo.svg.png')} alt="Logo Cinemark" />
                </a>
            </div>
            <div className="col-8 d-flex align-items-center">
                <ul>
                    <li tabIndex="0" role="navigation">CARTELERA</li>
                    <li tabIndex="0" role="navigation">TEATROS</li>
                    <li tabIndex="0" role="navigation">SNACKBAR</li>
                    <li tabIndex="0" role="navigation">PROMOCIONES</li>
                    <li tabIndex="0" role="navigation">PREVENTA</li>
                </ul>
            </div>
        </nav>
    );
}

export default Menu;
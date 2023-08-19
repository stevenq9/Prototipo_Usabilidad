import React from 'react';
import '../componentsStyles/Menu.css';

function Menu() {
    return (
        <menu className="row bg_primario txt_primario ">
                <div className="col-3 d-flex align-items-center mt-3">
                    <img src={require('../logos/Cinemark_Logo.svg.png')} alt="Logo Cinemark" />
                </div>
                <div className="col-8 d-flex align-items-center mt-3">
                    <ul>
                        <li>CARTELERA</li>
                        <li>TEATROS</li>
                        <li>SNACKBAR</li>
                        <li>PROMOCIONES</li>
                        <li>PREVENTA</li>
                    </ul>
                </div>
        </menu >
    );
}

export default Menu;
import React, { useState } from 'react';
import Encabezado from '../components/Encabezado';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import '../routesStyles/recuperarContraseñaStyle.css';

function RecuperarContrasena() {
    const [enlaceEnviado, setEnlaceEnviado] = useState(false);

    const handleEnviarClick = () => {
        // Aquí puedes realizar la lógica de enviar el correo y luego mostrar el visto.
        // Por ahora, solo mostraremos el visto cuando se haga clic en el botón "ENVIAR."
        setEnlaceEnviado(true);
    };

    return (
        <div id='InicioSesion'>
            <Encabezado />
            <Menu />

            <div id="recuperarContraseña" className='row d-flex justify-content-center'>
                <div action="Post" className='row formulario d-flex align-items-center form mt-4 ps-5 pt-2 pb-2 pe-5'>
                    <h1 className='txt_primario fw-bold text-center'>RECUPERAR CONTRASEÑA</h1>
                    <h5>Ingresa tu dirección de correo electrónico, te enviaremos un enlace para recuperar tu contraseña</h5>
                    <input className='row bg_secundario' type="email" placeholder='CORREO' />
                    <div className='row d-flex justify-content-center '>
                        <button className='row bg_terciario btn txt_primario' onClick={handleEnviarClick}>
                            ENVIAR
                        </button>
                    </div>
                    <h5 className='row fw-bold text-center'>
                        <span id="iconoVisto" className='fst-italic' style={{ display: enlaceEnviado ? 'inline' : 'none' }}>
                            ✓ ENLACE ENVIADO <br /> <br />
                            ¿No encuentras el correo? No olvides revisar tu bandeja de Spam
                        </span>
                    </h5>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default RecuperarContrasena;

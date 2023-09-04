import React from 'react';
import Encabezado from '../components/Encabezado'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import '../routesStyles/registroStyle.css'
import VerificarCorreo from '../components/VerificarCorreo';

function Registro() {
    return (
        <div id='Registro' className='bg_primario'>
            <Encabezado />
            <Menu />

            <div id='registro' className='row d-flex justify-content-center'>
                <form  action="Post" className='row formulario d-flex align-items-center bg_auxiliar mt-5 ps-5 pt-2 pb-2 pe-5'>
                    <h1 className='text-center txt_terciario fw-bold'>REGISTRO</h1>
                    <input type="text" className='col-6 bg_secundario' placeholder='NOMBRE' />
                    <input type="text" className='col-6 bg_secundario ' placeholder='APELLIDO' />
                    <input className='bg_secundario' type="email" placeholder='CORREO' />
                    <input className='bg_secundario' type="password" name="contraseña" placeholder='CONTRASEÑA' />
                    <div className='row d-flex justify-content-center '>
                        <button className='btn bg_terciario txt_primario'>REGISTRARME</button>
                    </div>
                    <text>O continua con:</text>
                    <div className=''>
                        <img className='col-5 ms-4 me-3' src={require('../images/continuaConGoogle.png')} alt="Registrate con Google" />
                        <img className='col-5' src={require('../images/continuaConFacebook.png')} alt="Registrate con Facebook" />
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    );
}

export default Registro;
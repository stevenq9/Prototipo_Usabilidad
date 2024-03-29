import React, { useState, useEffect } from 'react';
import '../componentsStyles/Banner.css';

function Banner() {
    const imagenes = [
        require('../images/flash.png'), // Imagen actual
        require('../images/laMonja.jpg'), // Imagen siguiente
        // Agrega más imágenes según sea necesario
    ];

    const [indiceImagenActual, setIndiceImagenActual] = useState(0);

    const mostrarImagenActual = () => {
        return imagenes[indiceImagenActual];
    }

    const retrocederImagen = () => {
        const nuevoIndice = (indiceImagenActual - 1 + imagenes.length) % imagenes.length;
        setIndiceImagenActual(nuevoIndice);
    }

    const avanzarImagen = () => {
        const nuevoIndice = (indiceImagenActual + 1) % imagenes.length;
        setIndiceImagenActual(nuevoIndice);
    }

    useEffect(() => {
        const ctrlAtras = document.getElementById('ctrl_atras');
        const ctrlAdelante = document.getElementById('ctrl_adelante');

        ctrlAtras.addEventListener('click', retrocederImagen);
        ctrlAdelante.addEventListener('click', avanzarImagen);

        // Cambiar automáticamente la imagen cada 10 segundos
        const intervalId = setInterval(avanzarImagen, 10000);

        // Limpia el intervalo cuando el componente se desmonta
        return () => {
            ctrlAtras.removeEventListener('click', retrocederImagen);
            ctrlAdelante.removeEventListener('click', avanzarImagen);
            clearInterval(intervalId);
        }
    }, [indiceImagenActual]);

    return (
        <section>
            <svg role="button" aria-label="Retroceder a la anterior portada de la película de estreno" tabIndex="0" alt="clic para retroceder a la anterior portada de la película de estreno" id="ctrl_atras" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5704 3.51185V0.751136C17.5704 0.51185 17.2954 0.379707 17.1097 0.526136L1.00965 13.1011C0.872858 13.2075 0.762171 13.3437 0.686031 13.4994C0.609892 13.6551 0.570312 13.8261 0.570312 13.9994C0.570312 14.1726 0.609892 14.3436 0.686031 14.4993C0.762171 14.655 0.872858 14.7912 1.00965 14.8976L17.1097 27.4726C17.2989 27.619 17.5704 27.4869 17.5704 27.2476V24.4869C17.5704 24.3119 17.4882 24.144 17.3525 24.0369L4.49536 14.0011L17.3525 3.96185C17.4882 3.85471 17.5704 3.68685 17.5704 3.51185Z" fill="white" />
            </svg>
            <img role="img" tabIndex="0"  id="imagenBanner" src={mostrarImagenActual()} alt="Portada película Flash" />
            <svg role="button" aria-label="Avanzar a la siguiente portada de la película de estreno" tabIndex="0" alt="clic para avanzar a la siguiente portada de la película de estreno" id="ctrl_adelante" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.0607 13.1008L0.960717 0.525837C0.918647 0.492716 0.868088 0.472133 0.814848 0.466451C0.761607 0.460769 0.707843 0.470219 0.659731 0.493716C0.611619 0.517212 0.57111 0.553803 0.542856 0.599284C0.514602 0.644766 0.499749 0.697294 0.500003 0.750837V3.51155C0.500003 3.68655 0.582146 3.85441 0.717861 3.96155L13.575 14.0008L0.717861 24.0401C0.578575 24.1473 0.500003 24.3151 0.500003 24.4901V27.2508C0.500003 27.4901 0.775003 27.6223 0.960717 27.4758L17.0607 14.9008C17.1976 14.7941 17.3083 14.6576 17.3844 14.5016C17.4605 14.3456 17.5001 14.1744 17.5001 14.0008C17.5001 13.8273 17.4605 13.656 17.3844 13.5001C17.3083 13.3441 17.1976 13.2076 17.0607 13.1008Z" fill="white" />
            </svg>
        </section>
    );
}

export default Banner;

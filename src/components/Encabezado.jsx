import React from 'react';
import '../componentsStyles/Encabezado.css';
import { Link } from 'react-router-dom';

function Encabezado() {
  return (
    <header className="encabezado" role="banner">
      <div className="encabezado-contenido row d-flex align-items-center bg_secundario">
        <div className="col-3">
          <div className="row d-flex justify-content-center">
            <div className="col-3 logo bg_primario d-flex justify-content-center">
              <a role="link" tabIndex="0" title="Enlace página de Facebook de Cinemark" href="https://www.facebook.com/CinemarkEcuador/?locale=es_LA">
                <svg role="img" aria-label="Enlace página de Facebook de Cinemark" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.93464 0.998889H5.33464C3.86797 0.932222 2.53464 2.06556 2.46797 3.59889C2.46797 3.73222 2.46797 3.86556 2.46797 3.99889V5.33222H0.934635C0.801302 5.26556 0.667969 5.39889 0.667969 5.53222V7.53222C0.667969 7.66556 0.801302 7.79889 0.934635 7.79889H2.46797V12.7989C2.46797 12.9322 2.6013 13.0656 2.73464 13.0656H4.8013C4.93464 13.0656 5.06797 12.9322 5.06797 12.8656V7.86556H6.86797C7.0013 7.86556 7.13464 7.73222 7.13464 7.59889V5.59889C7.13464 5.46556 7.0013 5.33222 6.86797 5.33222H5.0013V4.13222C5.0013 3.59889 5.13464 3.33222 5.86797 3.33222H6.93464C7.06797 3.33222 7.2013 3.19889 7.2013 3.06556V1.26556C7.13464 1.13222 7.06797 0.998889 6.93464 0.998889Z" fill="white" />
                </svg>
              </a>
            </div>
            <div className="col-3 logo bg_primario d-flex justify-content-center">
              <a role="link" tabIndex="0" href="https://www.instagram.com/cinemarkec/?hl=es-la">
                <svg role="img" aria-label="Enlace página de Instagram de Cinemark" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.98333 1.75H5.01667C3.20833 1.75 1.75 3.20833 1.75 5.01667V8.98333C1.75 10.7917 3.20833 12.25 5.01667 12.25H8.98333C10.7917 12.25 12.25 10.7917 12.25 8.98333V5.01667C12.25 3.20833 10.7917 1.75 8.98333 1.75ZM11.2583 8.98333C11.2583 10.2667 10.2083 11.2583 8.98333 11.2583H5.01667C3.73333 11.2583 2.74167 10.2083 2.74167 8.98333V5.01667C2.74167 3.73333 3.79167 2.74167 5.01667 2.74167H8.98333C10.2667 2.74167 11.2583 3.79167 11.2583 5.01667V8.98333Z" fill="white" />
                  <path d="M7 4.375C5.54167 4.375 4.375 5.54167 4.375 7C4.375 8.45833 5.54167 9.625 7 9.625C8.45833 9.625 9.625 8.45833 9.625 7C9.625 5.54167 8.45833 4.375 7 4.375ZM7 8.63333C6.06667 8.63333 5.36667 7.875 5.36667 7C5.36667 6.125 6.125 5.36667 7 5.36667C7.875 5.36667 8.63333 6.125 8.63333 7C8.63333 7.93333 7.93333 8.63333 7 8.63333Z" fill="white" />
                  <path d="M9.79922 4.55156C9.99252 4.55156 10.1492 4.39486 10.1492 4.20156C10.1492 4.00826 9.99252 3.85156 9.79922 3.85156C9.60592 3.85156 9.44922 4.00826 9.44922 4.20156C9.44922 4.39486 9.60592 4.55156 9.79922 4.55156Z" fill="white" />
                </svg>
              </a>
            </div>
            <div className="col-3 logo bg_primario d-flex justify-content-center">
              <a role="link" tabIndex="0" href="https://twitter.com/CinemarkEC">
                <svg role="img" aria-label="Enlace página de Twitter de Cinemark" width="25" height="25" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.2497 1.90852C10.8414 2.08352 10.4331 2.20019 10.0247 2.25852C10.4914 1.96686 10.7831 1.55852 10.9581 1.09186C10.5497 1.32519 10.0831 1.50019 9.61641 1.61686C8.79974 0.741855 7.45807 0.741855 6.58307 1.55852C5.99974 2.08352 5.76641 2.84186 5.94141 3.60019C4.19141 3.48352 2.55807 2.66686 1.44974 1.32519C0.866406 2.31686 1.15807 3.54186 2.14974 4.18352C1.79974 4.18352 1.44974 4.06686 1.15807 3.89186C1.15807 4.94186 1.91641 5.81685 2.90807 5.99185C2.73307 6.05019 2.49974 6.05019 2.32474 6.05019C2.20807 6.05019 2.03307 6.05019 1.91641 5.99185C2.20807 6.86685 3.02474 7.45019 3.89974 7.50852C3.14141 8.09185 2.20807 8.44185 1.21641 8.44185C1.04141 8.44185 0.866406 8.44185 0.691406 8.44185C3.54974 10.2502 7.34141 9.43352 9.14974 6.57519C9.79141 5.58352 10.0831 4.47519 10.1414 3.36686V3.30852V3.01686C10.6081 2.72519 10.9581 2.37519 11.2497 1.90852Z" fill="white" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="col-5 d-flex justify-content-around txt_secundario">
          <nav role="navigation">
            <ul>
              <li tabIndex="0" role="navigation">Tarifas</li>
              <li tabIndex="0" role="navigation">Conócenos</li>
              <li tabIndex="0" role="navigation">Formatos</li>
              <li tabIndex="0" role="navigation">Marketing</li>
            </ul>
          </nav>
        </div>
        <div className="col-4 d-flex justify-content-end">
          <div className="row txt_primario">
            <div className="col-4 boton bg_primario d-flex align-items-center">
              <Link role="link" tabIndex="0" to="/registro" className="links text-center txt_primario">REGISTRARSE</Link>
            </div>
            <div className="col-4 boton bg_terciario d-flex align-items-center me-4">
              <Link id='btnInicioSesion' role="link" tabIndex="0" to="/iniciarSesion" className="text-center txt_primario">INICIAR SESIÓN</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Encabezado;
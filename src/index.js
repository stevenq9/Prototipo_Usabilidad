import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home';
import Registro from './routes/Registro';
import InicioSesion from './routes/InicioSesion';
import RecuperarContraseña from './routes/RecuperarContrasena';
import Horario from './routes/Horarios'
import Verificar from './components/VerificarCorreo'

const router = createBrowserRouter([
  {
    path: "/Prototipo_Usabilidad/",
    element: <Home />,
    errorElement: <h1>No se puede acceder al elemento solicitado</h1>
  },
  {
    path: "/Prototipo_Usabilidad/registro",
    element: <Registro />
  },
  {
    path: "/Prototipo_Usabilidad/iniciarSesion",
    element: <InicioSesion />
  },
  {
    path: "/Prototipo_Usabilidad/horario",
    element: <Horario />
  },
  {
    path: "/Prototipo_Usabilidad/recuperarContraseña",
    element: <RecuperarContraseña />
  },
  {
    path: "/Prototipo_Usabilidad/verificar",
    element: <Verificar />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


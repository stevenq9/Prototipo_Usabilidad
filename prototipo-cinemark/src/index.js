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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>No se puede acceder al elemento solicitado</h1>
  },
  {
    path: "/registro",
    element: <Registro />
  },
  {
    path: "/iniciarSesion",
    element: <InicioSesion />
  },
  {
    path: "/horarios",
    element: <Horario />
  },
  {
    path: "/recuperarContraseña",
    element: <RecuperarContraseña />
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


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Home } from './Users';
import { Usuarios } from './Usuarios';
import { Login } from './Login';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecoverPassword } from './RecoverPassword';
import Forms from './Forms';
import Graphics from './Graphics';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/home',
    element: <App />
  },
  {
    path: '/users',
    element: <Home />
  },
  {
    path: '/registrarse',
    element: <Usuarios />
  },
  {
    path: '/recuperarContraseña',
    element: <RecoverPassword />
  },
  {
    path: '/forms',
    element: <Forms />
  },
  {
    path: '/graficas',
    element: <Graphics/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



reportWebVitals();

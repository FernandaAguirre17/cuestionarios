import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Home } from './Home/Home';
import {Usuarios} from './Usuarios';
import {Login} from './Login';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App/>
  }, 
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/Usuarios',
    element: <Usuarios/>
  },
  {
    path: '/Login',
    element: <Login/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
 


reportWebVitals();

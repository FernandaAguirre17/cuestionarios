import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Home } from './Home';
import {Usuarios} from './Usuarios';
import {Login} from './Login';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {QuizCreator} from './OpMultiple';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecoverPassword } from './RecoverPassword';
import Forms from './Forms';
import Prueba from './test';
import QuestionCasilla from './QuestionCasillas';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Login/>
  }, 
  {
    path: '/home',
    element: <App/>
  },
  {
    path: '/users',
    element: <Home/>
  },
  {
    path: '/registrarse',
    element: <Usuarios/>
  },
  {
    path: '/opcion-multiple',
    element: <QuizCreator/>
    
  },
  {
    path: '/recuperarContraseña',
    element: <RecoverPassword/>
  },
  {
    path: '/forms',
    element: <Forms/>
  },
  {
    path: '/p',
    element: <Prueba/>
  },
  {
    path: '/q',
    element: <QuestionCasilla />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
 


reportWebVitals();

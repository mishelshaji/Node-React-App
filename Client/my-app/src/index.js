import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from './Components/Public/About';
import Home from './Components/Public/Home';
import Login from './Components/Auth/Login';
import Contacts from './Components/User/Contacts';

const router = createBrowserRouter([
  { path: "/", element: <App/>, children: [
    { path: "/", element: <Home/>},
    { path: "/about", element: <About/>},
  ]},
  { path: "/auth", element: <App/>, children: [
    { path: "/auth/login", element: <Login/>},
  ]},
  {
    path: '/user', element: <App/>, children: [
      { path: '/user', element: <Contacts/> },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

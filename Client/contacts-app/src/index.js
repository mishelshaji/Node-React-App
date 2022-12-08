import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Contacts from "./Components/UserComponents/Contacts/Contacts";
import User from "./Components/RootComponents/User";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "login", element: <Login></Login>},
      {path: "register", element: <Register></Register>},
    ]
  },
  {
    path: "/user",
    element: <User />,
    children: [
      {path: "/user/contacts", element: <Contacts></Contacts>},
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

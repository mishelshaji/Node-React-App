import {React, useState, useEffect} from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import UserNavbar from '../Shared/UserNavbar';

function User() {
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('token');
    if (!user) {
      setLoggedIn(false);
    }
  });

  return (
    <div>
        {!loggedIn && <Navigate to="/login" replace={true}></Navigate>}
        <UserNavbar></UserNavbar>
        <Outlet></Outlet>
    </div>
  )
}

export default User
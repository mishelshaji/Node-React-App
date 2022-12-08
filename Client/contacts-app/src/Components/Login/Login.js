import {React, useState} from 'react';
import {login} from "../../Services/accountsService";
import {Navigate} from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  async function handleFormSubmit(e){
    e.preventDefault();
    var res = await login({
      email: email,
      password: password
    });

    if(!res.success){
      setErrorMessage(res.errors[0]);
      return;
    }

    localStorage.setItem('token', res.data);
    setLoggedIn(true);
  }

  return (
    <div className='container'>
      <h1 className='text-center'>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
        </div>
        <div className='d-grid mt-2'>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        {errorMessage && <div className='alert alert-danger mt-2'>{errorMessage}</div>}
      </form>

      {loggedIn && <Navigate to='/user/contacts'/>}
    </div>
  )
}

export default Login
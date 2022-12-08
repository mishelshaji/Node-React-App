import {React, useState} from 'react';
import {register} from "../../Services/accountsService";

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleFormSubmit(e){
    e.preventDefault();
    console.log(name, email, password);

    register({
      name: name,
      email: email,
      password: password
    }).then(res=>{
      console.log(res.data);

      if(res.data.success){
        console.log('User created successfully.');
        alert('User created successfully.');
      }
    });
  }

  return (
    <div className="container">
      <h1 className='text-center'>Register</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter name" onChange={e=>setName(e.target.value)}/>
        </div>
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
      </form>
    </div>
  )
}

export default Register
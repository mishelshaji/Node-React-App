import {React, useState} from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from 'yup';
import {login as loginService} from "../../Services/AuthService"
import {Navigate} from "react-router-dom"

function Login() {
    const [hasLoggedIn, setHasLoggedIn] = useState(false);
  return (
    <div className='container'>
        <h1 className='text-center'>Login</h1>

        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={
                Yup.object().shape({
                    email: Yup.string().email().required('Email is required.'),
                    password: Yup.string().required('Password is required.')
                })
            }
            onSubmit={async (values, { setSubmitting }) => {
                var res = await loginService(values);
                localStorage.setItem('token', res.data);
                setSubmitting(false);
                setHasLoggedIn(true);
            }}
            >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label>Email</label>
                        <Field type="email" name="email" className='form-control'/>
                        <ErrorMessage name="email" component="div"  className='text-danger'/>
                    </div>
                    <div>
                        <label>Password</label>
                        <Field type="password" name="password" className='form-control'/>
                        <ErrorMessage name="password" component="div" className='text-danger'/>
                    </div>
                    <button type="submit" disabled={isSubmitting} className='btn btn-primary mt-2'>
                        Submit
                    </button>
                    {hasLoggedIn && <Navigate to='/user'/>}
                </Form>
            )}
     </Formik>
    </div>
  )
}

export default Login
import React, { useState } from 'react';
import { Formik, Form, useFormik } from 'formik';

import TextField from '../components/TextField';
import * as Yup from 'yup';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';

const LoginScreen = ({ history }) => {
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log('ok');
        axios.post('/api/v2/public/login', { values }).then((res) => {
          console.log(res);
          console.log(res.data);
          history.push('/product');
        });
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>

          <Form>
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />

            <button className="btn btn-dark mt-3" type="submit">
              Login
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default LoginScreen;

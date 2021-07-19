import { Formik, Form } from 'formik';
import React from 'react';
import TextField from '../components/TextField';
import * as Yup from 'yup';
import './User.css'

const AddNewUserScreen = () => {
  const validate = Yup.object({
    name: Yup.string()
      .min(1, 'Name must be atleast one character')
      .required('Required'),
    email: Yup.string().email('email is invalid').required('Required'),
    password: Yup.string()
      .min(6, 'password must be 6 characters')
      .required('Required'),
  });
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        photo: '',
      }}
      validationSchema={validate}
    >
      {(formik) => (
        <div className="mx-5 my-2 form-wrapper">
          <h3> Register</h3>
          {console.log(formik.values)}
          <Form>
            <TextField label="Name" name="name" type="text" />
            <TextField label="email" name="email" type="text" />
            <TextField label="password" name="password" type="password" />
            <TextField label="photo" name="photo" type="text" />
            <button className="btn btn-dark mt-3" type="submit">
              Register
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default AddNewUserScreen;

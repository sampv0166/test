import { Formik, Form } from 'formik';
import React from 'react';
import TextField from '../components/TextField';
import * as Yup from 'yup';
import './User.css';
import { userRegister } from '../api/authentication';

const AddNewUserScreen = ({ history }) => {
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
      onSubmit={(values) => {
        userRegister(values);
        history.push('/userscreen');
      }}
    >
      {(formik) => (
        <div className="mx-5 my-2">
          <h3> Register</h3>
          <Form>
            <div className="row g-3">
              <div className="col-md-6">
                <TextField label="Name" name="name" type="text" />
              </div>
              <div className="col-md-6">
                <TextField label="email" name="email" type="text" />
              </div>
            </div>
            <div className="row g-3">
              <TextField label="password" name="password" type="password" />
            </div>
            <div className="row g-3">
              <div className="col-md-12">
                <input
                  className="my-4 form-control  shadow-none rounded"
                  label="Image"
                  name="photo"
                  type="file"
                  onChange={(e) =>
                    formik.setFieldValue('image', e.target.files[0])
                  }
                ></input>
              </div>
            </div>
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

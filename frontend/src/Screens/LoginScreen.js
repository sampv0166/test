import { Formik, Form } from "formik";

import TextField from "../components/TextField";
import * as Yup from "yup";
import { userLogin } from "../api/authentication";

import PropTypes from "prop-types";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginScreen = ({ location, history, setUser }) => {
  const [currentUser, setCurrentUser] = useState([]);

  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });

  const handleSubmit = async (values) => {
    const userinfo = await userLogin(values.email, values.password);
    setUser(userinfo);
    setCurrentUser(userinfo);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
        handleSubmit(values);
      }}
    >
      {(formik) => (
        <div className="container w-25 border bg-white p-4 my-5 rounded login">
          <div className="my-5">
            <h1 className="my-4 font-weight-bold .display-4">Log in</h1>

            <Form>
              <TextField label="Email" name="email" type="email" />
              <TextField label="password" name="password" type="password" />

              <button
                className="link-button text-md-center fs-3  w-100 btn btn-dark mt-3"
                type="submit"
              >
                Login
              </button>
              {/*!currentUser.success  ? <div className='bg-danger rounded my-3'>wrong credentials</div> : ""*/}
            </Form>
          </div>
          <Row className="py-3">
            <Col>
              <a href="/addnewuser">Register</a>
            </Col>
          </Row>
        </div>
      )}
    </Formik>
  );
};

LoginScreen.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default LoginScreen;

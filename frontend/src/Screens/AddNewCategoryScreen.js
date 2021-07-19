import React from 'react';
import * as Yup from 'yup';
import TextField from '../components/TextField';
import { Formik, Form } from 'formik';
import { Row, Col, Button } from 'react-bootstrap';

const AddNewCategoryScreen = () => {
  const validate = Yup.object({
    name_ar: Yup.string().required('Required'),
    name_en: Yup.string().required('Required'),
    image: Yup.string().required('Required'),
    isactive: Yup.number(),
  });
  return (
    <Formik
      initialValues={{
        name_ar: '',
        name_en: '',
        image: '',
        isactive: '',
      }}
      validationSchema={validate}
    >
      {(formik) => (
        <div className="mx-5 my-2 form-wrapper">
          <h3> Add New Category</h3>
          {console.log(formik.values)}
          <Form>
            <div className="my-4">
              <Row>
                <Col>
                  <TextField label="Arabic Name" name="name_ar" type="text" />
                </Col>
                <Col>
                  <TextField label="English Name" name="name_en" type="text" />
                </Col>
              </Row>

              <Row>
                <Col>
                  <TextField label="Product Image" name="image" type="text" />
                </Col>
                <Col>
                  <Button className="my-4 w-50 btn-dark">UPLOAD</Button>
                </Col>
              </Row>

              <button className="btn btn-dark mt-3" type="submit">
                Save Category
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default AddNewCategoryScreen;

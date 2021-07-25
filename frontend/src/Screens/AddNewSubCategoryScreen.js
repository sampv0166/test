import React from 'react';
import * as Yup from 'yup';
import TextField from '../components/TextField';
import { Formik, Form } from 'formik';

const AddNewSubCategoryScreen = () => {
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
        <div className="mx-5 my-2">
          <h3> Add New Sub Category</h3>
          <Form>
            <div className="my-4">
              <div className="row g-3">
                <div className="col-md-6">
                  <TextField label="Arabic Name" name="name_ar" type="text" />
                </div>
                <div className="col-md-6">
                  <TextField label="English Name" name="name_en" type="text" />
                </div>
              </div>

              <div className="row g-3">
                <div className="col-md-12">
                  <input
                    className="my-4 form-control shadow-none rounded"
                    label="Image"
                    name="image"
                    type="file"
                    onChange={(e) =>
                      formik.setFieldValue('image', e.target.files[0])
                    }
                  ></input>
                </div>
              </div>

              <button className="btn btn-success mt-3" type="submit">
                Save Sub Category
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default AddNewSubCategoryScreen;

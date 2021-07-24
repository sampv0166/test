import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import TextField from '../components/TextField';
import { Formik, Form } from 'formik';
import { addCategory, getCategory } from '../api/category';

const AddNewCategoryScreen = ({ history, heading }) => {
  const [category, setCategory] = useState([]);

  const validate = Yup.object({
    name_ar: Yup.string().required('Required'),
    name_en: Yup.string().required('Required'),
    image: Yup.string().required('Required'),
    isactive: Yup.number(),
  });

  useEffect(() => {
    const fetchCategory = async () => {
      const { data } = await getCategory();
      setCategory(data[0]);
    };

    if (heading === 'Update Category') {
      fetchCategory();
    }
  }, [heading]);

  console.log(category);

  return (
    <Formik
      enableReinitialize
      initialValues={{
        name_ar: category.name_ar || '',
        name_en: category.name_en || '',
        image: category.fullimageurl || '',
        isactive: category.active || '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        addCategory(values);
        history.push('/category');
      }}
    >
      {(formik) => (
        <div>
          <h3>{heading}</h3>
          {console.log(formik.values)}
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

              <button className="btn btn-dark mt-3" type="submit">
                {heading}
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default AddNewCategoryScreen;

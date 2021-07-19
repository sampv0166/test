import React from 'react';
import * as Yup from 'yup';
import TextField from '../components/TextField';
import { Formik, Form } from 'formik';
import { Row, Col } from 'react-bootstrap';
import Select from '../components/Select';
import axios from 'axios';
const EditProductScreen = ({ history }) => {
  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' },
  ];

  const validate = Yup.object({
    name_ar: Yup.string().required('Required'),
    name_en: Yup.string().required('Required'),
    image: Yup.string().required('Required'),
    shop_id: Yup.string().required('Required'),
    description_ar: Yup.string().required('Required'),
    description_en: Yup.string().required('Required'),
    category_id: Yup.string().required('Required'),
    subcategory_id: Yup.string().required('Required'),
    sort_index: Yup.string().required('Required'),
    bestseller: Yup.number(),
    special: Yup.number(),
    isactive: Yup.number(),
  });
  return (
    <Formik
      initialValues={{
        name_ar: '',
        name_en: '',
        image: '',
        shop_id: '',
        description_ar: '',
        description_en: '',
        category_id: '',
        subcategory_id: '',
        sort_index: '',
        bestseller: '',
        special: '',
        isactive: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log('ok');
        axios.post('/api/v2/admin/product', { values }).then((res) => {
          console.log(res);
          console.log(res.data);
          history.push('/product');
        });
      }}
    >
      {(formik) => (
        <div className="mx-5 my-2 form-wrapper">
          <h3> Update Product</h3>
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
                  <TextField
                    label="Arabic Description"
                    name="description_ar"
                    type="text"
                  />
                </Col>
                <Col>
                  <TextField
                    label="English Description"
                    name="description_en"
                    type="text"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Select
                    control="select"
                    label="Category"
                    name="category_id"
                    options={dropdownOptions}
                  ></Select>
                </Col>
                <Col>
                  <Select
                    control="select"
                    label="Sub Category"
                    name="subcategory_id"
                    options={dropdownOptions}
                  ></Select>
                </Col>
              </Row>
              <Row>
                <div class="mb-3">
                  <input
                    className="my-3 form-control  shadow-none rounded"
                    label="Image"
                    name="image"
                    type="file"
                    onChange={(e) =>
                      formik.setFieldValue('image', e.target.files[0])
                    }
                  ></input>
                </div>
              </Row>
              <Row>
                <Col>
                  <Select
                    control="select"
                    label="Shop Name"
                    name="shop_id"
                    options={dropdownOptions}
                  ></Select>
                </Col>
                <Col>
                  <Select
                    control="select"
                    label="Status"
                    name="isactive"
                    options={[
                      { key: 'Select Product Status', value: '' },
                      { key: 'Active', value: '1' },
                      { key: 'Disabled', value: '2' },
                    ]}
                  ></Select>
                </Col>
              </Row>

              <Row className="my-2">
                <Col>
                  <Select
                    control="select"
                    label="Best Seller"
                    name="bestseller"
                    options={[
                      { key: 'Select An Option', value: '' },
                      { key: 'Yes', value: '1' },
                      { key: 'No', value: '0' },
                    ]}
                  ></Select>
                </Col>
                <Col>
                  <Select
                    control="select"
                    label="Special"
                    name="special"
                    options={[
                      { key: 'Select An Option', value: '' },
                      { key: 'Yes', value: '1' },
                      { key: 'No', value: '0' },
                    ]}
                  ></Select>
                </Col>
                <Col>
                  <TextField
                    label="Sort Index"
                    name="sort_index"
                    type="number"
                  />
                </Col>
              </Row>

              <button className="btn btn-dark mt-3" type="submit">
                Update Product
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default EditProductScreen;

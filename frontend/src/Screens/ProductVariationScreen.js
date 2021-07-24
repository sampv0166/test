import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { getvariations } from '../api/variations';
import Select from '../components/Select';
import TextField from '../components/TextField';
import * as Yup from 'yup';
import './ProductVariationScreen.css';

const ProductVariationScreen = () => {
  const [productVariations, setProductVariations] = useState([]);
  const [variationId, setVariationId] = useState();
  const [color, setColor] = useColor('hex', '#121212');
  const [colorPalette, setColorPalette] = useState('hidden');
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleImageChange = (e) => {
    // console.log(e.target.files[])
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const renderPhotos = (source) => {
    console.log('source: ', source);

    return source.map((photo) => {
      return <img src={photo} alt="" key={photo} />;
    });
  };

  const handleClick = (e, id) => {
    setVariationId(id);
  };

  useEffect(() => {
    const fetchvariations = async () => {
      const { data } = await getvariations();
      setProductVariations(data);
    };
    fetchvariations();
    //console.log(color.hex);
  }, [color]);

  const validate = Yup.object({
    name_ar: Yup.string().required('Required'),
    name_en: Yup.string().required('Required'),
    images: Yup.array().required('Required'),
    product_id: Yup.number().required('Required'),
    price: Yup.number().required('Required'),
    offerprice: Yup.number(),
    hasoffer: Yup.number(),
    stocks: Yup.number(),
    sku: Yup.string(),
    color_name: Yup.string(),
    color_value: Yup.string(),
  });

  const handleColorPicker = (e) => {
    e.preventDefault();
    if (colorPalette === 'hidden') {
      setColorPalette('show');
    } else {
      setColorPalette('hidden');
    }
  };

  return (
    <div>
      {console.log(variationId)}
      <h3>Product Variations</h3>
      <div className="my-5">
        <table className="table table-striped table-sm table-color border">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">price</th>
              <th scope="col">offerprice</th>
              <th scope="col">color</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {productVariations.map((productVariation) => (
              <tr key={productVariation.id}>
                <th scope="row">1</th>
                <td>{productVariation.price}</td>
                <td>{productVariation.offerprice}</td>
                <td>{productVariation.color_name}</td>
                <td>
                  <button
                    onClick={(e) => handleClick(e, productVariation.id)}
                    className="rounded"
                  >
                    <i className="bi bi-pencil edit-icon-color set-cursor"></i>
                  </button>
                </td>

                <td>
                  <button
                    className="rounded"
                    //  onClick={() => deleteProductHandler(product.id)}
                  >
                    <i className="bi bi-trash delete-icon-color set-cursor"></i>
                  </button>
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Formik
        enableReinitialize
        initialValues={{
          name_ar: '',
          name_en: '',
          images: '',
          product_id: '',
          price: '',
          offerprice: '',
          hasoffer: '',
          stocks: '',
          sku: '',
          color_name: '',
          color_value: '' || color.hex,
        }}
        validationSchema={validate}
      >
        {(formik) => (
          <div className="my-4">
            <h3 className="pb-3 border-bottom">Add New Product Variation</h3>
            {console.log(formik.values)}
            <Form>
              <div className="row g-3">
                <div className="col-md-6">
                  <TextField label="Arabic Name" name="name_ar" type="text" />
                </div>
                <div className="col-md-6">
                  <TextField label="English Name" name="name_en" type="text" />
                </div>
              </div>
              
              <div className="row g-3">
                <div className="col-md-6">
                  <TextField label="Price" name="price" type="number" />
                </div>
                <div className="col-md-6">
                  <TextField
                    label="Offer Price"
                    name="offerprice"
                    type="number"
                  />
                </div>
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <TextField label="Stock" name="stocks" type="number" />
                </div>
                <div className="col-md-6">
                  <TextField label="SKU" name="sku" type="number" />
                </div>
              </div>

              <div className="row g-3">
                <div className="col-md-3 ">
                  <label
                    style={{ cursor: 'pointer' }}
                    className="border py-3 px-5 text-light add-photo  rounded"
                    htmlFor="file"
                  >
                    <i className="px-2 pb-1 bi bi-images"></i>
                    ADD PHOTO
                  </label>
                </div>
              </div>
              <div className="row g-3">
                <div className="col-md-12">
                  <div>
                    <input
                      type="file"
                      id="file"
                      multiple
                      onChange={handleImageChange}
                    />
                    <div className="result">{renderPhotos(selectedFiles)}</div>
                  </div>
                </div>
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <TextField label="Color Name" name="color_name" type="text" />
                </div>
              </div>

              <div className="row g-3">
                <div className="col-md-3">
                  <TextField
                    label="Color Value"
                    name="color_value"
                    type="text"
                  />
                </div>
                <div className="col-md-3">
                  <button
                    onClick={handleColorPicker}
                    className="my-4 btn btn-info w-100 h-50"
                    style={{ backgroundColor: `${color.hex}` }}
                  ></button>
                </div>
              </div>

              {colorPalette === 'show' ? (
                <div className="row g-3">
                  <div className="col-md-4">
                    <ColorPicker
                      width={250}
                      height={100}
                      color={color}
                      onChange={setColor}
                      hideHSV
                      dark
                    />
                    <button
                      onClick={handleColorPicker}
                      className="btn rounded bg-success w-50 mt-2 mx-5"
                    >
                      ok
                    </button>
                  </div>
                </div>
              ) : (
                ''
              )}
             
              <button className={`btn btn-dark mt-3`} type="submit">
                Save
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default ProductVariationScreen;

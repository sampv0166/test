import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { getvariations } from "../api/variations";
import TextField from "../components/TextField";
import * as Yup from "yup";
import "./ProductVariationScreen.css";

const ProductVariationScreen = ({match ,history,heading}) => {

  const [productVariations, setProductVariations] = useState([]);
  const [variationId, setVariationId] = useState(null);
  const [color, setColor] = useColor("hex", "#121212");
  const [colorPalette, setColorPalette] = useState("hidden");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [formikFileArray, setFormikFileArray] = useState([]);

  const handleImageChange = (e, formik) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      console.log("filesArray: ", filesArray);
      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
    setFormikFileArray([...formikFileArray, e.currentTarget.files[0]]);
    formik.setFieldValue("images", formikFileArray);
  };

  const handleRemoveImage = (e, fileToRemove, index, source) => {
    e.preventDefault();
    console.log(fileToRemove);

    source = source.filter((fileName) => fileName !== fileToRemove);
    setSelectedFiles(source);
  };

  const renderPhotos = (source) => {
    console.log("source: ", source);

    return source.map((photo, index) => {
      return (
        <div className="row py-2 mx-2">
          <img src={photo} alt="" key={photo}></img>
          <div className="col w-100 mx-1">
            <button
              onClick={(e) =>
                handleRemoveImage(e, source[index], index, source)
              }
              type="button"
              className="btn btn-danger w-100"
            >
              <span className="badge badge-warning">Remove</span>
            </button>
          </div>
        </div>
      );
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

    if (heading === 'Update Variation') {
        console.log('ok');
        fetchvariations();
      }
    
  }, [heading]);

  const validate = Yup.object({
    name_ar: Yup.string().required("Required"),
    name_en: Yup.string().required("Required"),
    images: Yup.array().required("Required"),
    product_id: Yup.number().required("Required"),
    price: Yup.number().required("Required"),
    offerprice: Yup.number(),
    hasoffer: Yup.number(),
    stocks: Yup.number(),
    sku: Yup.string(),
    color_name: Yup.string(),
    color_value: Yup.string(),
  });

  const handleColorPicker = (e) => {
    e.preventDefault();
    if (colorPalette === "hidden") {
      setColorPalette("show");
    } else {
      setColorPalette("hidden");
    }
  };

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{
          name_ar: "",
          name_en: "",
          images: formikFileArray,
          product_id: "",
          price: "",
          offerprice: "",
          hasoffer: "",
          stocks: "",
          sku: "",
          color_name: "",
          color_value: "" || color.hex,
        }}
        validationSchema={validate}
      >
        {(formik) => (
          <div className="my-4">
            {heading == 'Update Variation' ? (
              <h3 className="pb-3 border-bottom">Update Product Variation</h3>
            ) : (
              <h3 className="pb-3 border-bottom">Add New Product Variation</h3>
            )}

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
                    style={{ cursor: "pointer" }}
                    className="text-nowrap border py-3 px-4 text-light add-photo  rounded"
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
                      name="images"
                      type="file"
                      id="file"
                      multiple
                      onChange={(e) => handleImageChange(e, formik)}
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

              {colorPalette === "show" ? (
                <div className="row g-3 w-50 mt-1">
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
                      className="btn rounded bg-success w-100 mx-3 my-1 mt-1"
                    >
                      Ok
                    </button>
                  </div>
                </div>
              ) : (
                ""
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

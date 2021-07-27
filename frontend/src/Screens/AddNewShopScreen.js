import * as Yup from "yup";
import TextField from "../components/TextField";
import { Formik, Form } from "formik";

const AddNewShopScreen = ({ match, history, heading }) => {

  const validate = Yup.object({
    shop_name_ar: Yup.string().required("Required"),
    shop_name_en: Yup.string().required("Required"),
    image: Yup.string().required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
  });

  return (
    <Formik
      enableReinitialize
      initialValues={{
        shop_name_ar: "",
        shop_name_en: "",
        image: "",
        email: "",
      }}
      validationSchema={validate}
    >
      {(formik) => (
        <div className="my-4">
          <h3> {heading}</h3>
          
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
                <TextField
                  label="Arabic Description"
                  name="description_ar"
                  type="text"
                />
              </div>
              <div className="col-md-6">
                <TextField
                  label="Email"
                  name="email"
                  type="text"
                />
              </div>
            </div>

            <div className="row g-3">
              <div className="col-md-12">
                <input
                  className="my-4 form-control  shadow-none rounded"
                  label="Image"
                  name="image"
                  type="file"
                  onChange={(e) =>
                    formik.setFieldValue("image", e.target.files[0])
                  }
                ></input>
              </div>
            </div>
            <button className="btn btn-success mt-3 my-2" type="submit">
              {heading}
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default AddNewShopScreen;

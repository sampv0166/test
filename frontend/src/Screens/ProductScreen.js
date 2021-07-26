import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { deleteProduct, getProduct } from "../api/products";
import MainScreenHeader from "../components/MainScreenHeader";

const ProductScreen = ({ match, history, user }) => {
  const [products, setProducts] = useState([]);

  const deleteProductHandler = async (id) => {
    if (window.confirm("Are you sure")) {
      deleteProduct(id);
      console.log(id + " product deleted");
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await getProduct();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="">
      {user.user.permissionslist.product.find(
        (permission) => permission === "add"
      ) ? (
        <MainScreenHeader
          buttonLabel={"Add New Product"}
          link={"/addnewproduct"}
        />
      ) : (
        ""
      )}

      <div className="mt-4">
        <table className="table table-sm table-responsive ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">AR NAME</th>
              <th scope="col">EN NAME</th>
              <th scope="col">COVER IMAG</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <th scope="row">1</th>
                <td>{product.name_ar}</td>
                <td>{product.name_en}</td>
                <td>
                  <img
                    className="img-fluid img-thumbnail"
                    style={{
                      height: "150px",
                      width: "150px",
                      objectFit: "contain",
                    }}
                    src={product.coverimage}
                    alt="Not Available"
                  ></img>
                </td>

                {user.user.permissionslist.variation ? (
                  <td>
                    <LinkContainer
                      style={{ cursor: "pointer" }}
                      to={`/product/variation/${product.id}`}
                    >
                      <button className="rounded">variations</button>
                    </LinkContainer>
                  </td>
                ) : (
                  ""
                )}

                {user.user.permissionslist.product.find(
                  (permission) => permission === "update"
                ) ? (
                  <td>
                    <LinkContainer
                      style={{ cursor: "pointer" }}
                      to={`/product/${product.id}/edit`}
                    >
                      <button className="rounded">
                        <i className="bi bi-pencil edit-icon-color set-cursor"></i>
                      </button>
                    </LinkContainer>
                  </td>
                ) : (
                  ""
                )}

                {user.user.permissionslist.product.find(
                  (permission) => permission === "delete"
                ) ? (
                  <td>
                    <button
                      className="rounded"
                      onClick={() => deleteProductHandler(product.id)}
                    >
                      <i className="bi bi-trash delete-icon-color set-cursor"></i>
                    </button>
                  </td>
                ) : (
                  ""
                )}

                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductScreen;

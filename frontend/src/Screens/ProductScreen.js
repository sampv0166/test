import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { deleteProduct, getProduct } from "../api/products";
import MainScreenHeader from "../components/MainScreenHeader";


const ProductScreen = ({ match, history }) => {
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
    <div className="global-min-width">
      <MainScreenHeader
        buttonLabel={"Add New Product"}
        link={"/addnewproduct"}
      />

      <div className="mt-4">
        <table className="table table-striped table-sm table-color border">
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
                  <img style={{height:'200px' ,width:'200px' , objectFit:'contain'}} src={product.coverimage} alt="Not Available"></img>
                </td>
                <td>
                  <LinkContainer
                    style={{ cursor: "pointer" }}
                    to={`/product/variation/${product.id}`}
                  >
                    <button className="rounded">variations</button>
                  </LinkContainer>
                </td>
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

                <td>
                  <button
                    className="rounded"
                    onClick={() => deleteProductHandler(product.id)}
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
    </div>
  );
};

export default ProductScreen;

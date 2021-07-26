import "react-color-palette/lib/css/styles.css";
import React, { useEffect, useState } from "react";
import { getvariations } from "../api/variations";
import "./ProductVariationScreen.css";
import { LinkContainer } from "react-router-bootstrap";
import MainScreenHeader from "../components/MainScreenHeader";

const ProductVariationScreen = ({match}) => {
  const [productVariations, setProductVariations] = useState([]);
  const productId = match.params.id;

  useEffect(() => {
    const fetchvariations = async () => {
      const { data } = await getvariations();
      setProductVariations(data);
    };
    fetchvariations();
  }, []);

  return (
    <div className="global-min-width">
      <MainScreenHeader
        buttonLabel={'Add New Variation'}
        link={`/addnewproductvariation/${productId}`}
      />
      <div className="my-5">
        <table className="table table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">price</th>
              <th scope="col">offerprice</th>
              <th scope="col">color</th>
              <th scope="col">stock</th>
              <th scope="col">SKU</th>
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
                <td>{productVariation.stock}</td>
                <td>{productVariation.sku}</td>
                <td>
                  <LinkContainer
                    style={{ cursor: 'pointer' }}
                    to={`/product/variation/${productVariation.id}/${productVariation.product_id}/edit`}
                  >
                    <button className="rounded">
                      <i className="bi bi-pencil edit-icon-color set-cursor"></i>
                    </button>
                  </LinkContainer>
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
    </div>
  );
};

export default ProductVariationScreen;

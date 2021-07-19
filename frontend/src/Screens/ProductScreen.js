import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

const ProductScreen = ({ history }) => {
  const [products, setProducts] = useState([]);

  const deleteProductHandler = async (id) => {
    if (window.confirm('Are you sure')) {
      console.log(id + ' product deleted');
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/v2/admin/getproducts');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="row h-100 container">
      <div className="d-flex pt-4 fluid  mx-4 bd-highlight h-100">
        <div>
          <h3 style={{color:'#513858'}}> Products</h3>
        </div>
        <div>
          
        </div>
        <div className="ms-auto">
          <LinkContainer className="list-group-item" to="/addnewproduct">
            <div className=" btn link-button mb-2">
              <span className="button-icon">
                <i class="bi bi-person"></i>
              </span>
              <span className="button-text">Add New</span>
            </div>
          </LinkContainer>
        </div>
      </div>

      <div className="mt-4 mx-3 ">
        <table className="table"  style={{color:'#513858'}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr>
                <th scope="row">1</th>
                <td>{product.name_en}</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <LinkContainer
                    style={{ cursor: 'pointer' }}
                    to={`/product/${product.id}/edit`}
                  >
                    <button>
                      <i
                        className="bi bi-pencil"
                        style={{ cursor: 'pointer',color:'brown' }}
                      ></i>
                    </button>
                  </LinkContainer>
                </td>

                <td>
                  <button onClick={() => deleteProductHandler(product.id)}>
                    <i
                      className="bi bi-trash"
                      style={{ cursor: 'pointer',color:'red' }}
                    ></i>
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

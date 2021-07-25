import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";

import { getshops } from "../api/shop";
import MainScreenHeader from "../components/MainScreenHeader";


const ShopScreen = ({ match, history }) => {
  const [shops, setShops] = useState([]);

  const deleteShopHandler = async (id) => {
    if (window.confirm("Are you sure")) {
      //deleteProduct(id);
      console.log(id + " product deleted");
    }
  };


  useEffect(() => {
    const fetchShops = async () => {
      const { data } = await getshops();
      setShops(data);
    };
    fetchShops();
  }, []);

  return (
    <div className="">
      <MainScreenHeader
        buttonLabel={"Add Shop"}
        link={"/addnewshop"}
      />

      <div className="mt-4">
        <table className="table table-sm table-responsive">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">NAME AR</th>
              <th scope="col">NAME EN</th>
              <th scope="col">EMAIL</th>
              <th scope="col">OWNER</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            {shops.map((shop) => (
              <tr key={shop.id}>
                <th scope="row">1</th>
                <td>{shop.shop_name_ar}</td>
                <td>{shop.shop_name_en}</td>
                <td>{shop.shop_email}</td>
                
                <td>
                  <LinkContainer
                    style={{ cursor: "pointer" }}
                    to={`/shop/${shop.id}/edit`}
                  >
                    <button className="rounded">
                      <i className="bi bi-pencil edit-icon-color set-cursor"></i>
                    </button>
                  </LinkContainer>
                </td>

                <td>
                  <button
                    className="rounded"
                    onClick={() => deleteShopHandler(shop.id)}
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

export default ShopScreen;

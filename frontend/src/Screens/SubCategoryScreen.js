import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

const SubCategoryScreen = () => {
  return (
    <div className="d-flex flex-column h-100 container">
      <div className="d-flex pt-4 fluid  mx-4 border-bottom bd-highlight h-100">
        <div>
          <h3>Sub Categories</h3>
        </div>
        <div>
          <div class="input-group mx-2">
            <div class="form-outline">
              <input type="search" id="form1" class="form-control" />
            </div>
            <i class="bi bi-search mx-2"></i>
          </div>
        </div>
        <div className="ms-auto">
          <LinkContainer className="list-group-item" to="/addnewsubcategory">
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
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">En Name</th>
              <th scope="col">Ar Name</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <i className="bi bi-pencil" style={{ cursor: 'pointer' }}></i>
              </td>
              <td>
                <i className="bi bi-trash" style={{ cursor: 'pointer' }}></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubCategoryScreen;

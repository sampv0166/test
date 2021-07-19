import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

const UserScreen = () => {
  return (
    <div className="d-flex flex-column h-100 container">
      <div className="d-flex pt-4 fluid  mx-4 border-bottom bd-highlight h-100">
        <div>
          <h3>Users</h3>
        </div>
        <div>
          <div className="input-group mx-2">
            <div className="form-outline">
              <input type="search" id="form1" className="form-control" />
            </div>
            <i className="bi bi-search mx-2"></i>
          </div>
        </div>
        <div className="ms-auto">
          <LinkContainer className="list-group-item" to="/addnewuser">
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
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Email</th>
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

export default UserScreen;

import React from 'react';
import MainScreenHeader from '../components/MainScreenHeader';

const UserScreen = () => {
  return (
    <div className="global-min-width">
      <MainScreenHeader buttonLabel={'Add User'} link={'/addnewuser'} />
      <div className="mt-4">
        <table className="table table-striped table-sm table-color">
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
                <i className="bi bi-pencil edit-icon-color set-cursor"></i>
              </td>
              <td>
                <i className="bi bi-trash delete-icon-color set-cursor"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserScreen;

import React from 'react';
import MainScreenHeader from '../components/MainScreenHeader';

const SubCategoryScreen = () => {
  return (
    <div className="global-min-width">
      <MainScreenHeader
        buttonLabel={'Add Sub Category'}
        link={'/addnewsubcategory'}
      />
      <div className="mt-4">
        <table className="table table-striped table-sm table-color">
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

export default SubCategoryScreen;

import React, { useEffect, useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { deleteCategory, getCategory } from '../api/category';
import MainScreenHeader from '../components/MainScreenHeader';

const CategoryScreen = () => {
  const [Category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const { data } = await getCategory();
      setCategory(data);
    };
    fetchCategory();
  }, []);

  const deleteCategoryHandler = async (id) => {
    if (window.confirm('Are you sure')) {
      deleteCategory(id);
      console.log(id + ' product deleted');
    }
  };

  return (
    <div className="global-min-width">
      <MainScreenHeader buttonLabel={'Add Category'} link="/addnewcategory" />
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
            {Category.map((category) => (
              <tr key={category.id}>
                <th scope="row">1</th>
                <td>{category.name_en}</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <LinkContainer
                    style={{ cursor: 'pointer' }}
                    to={`/category/${category.id}/edit`}
                  >
                    <button className="rounded">
                      <i className="bi bi-pencil edit-icon-color set-cursor"></i>
                    </button>
                  </LinkContainer>
                </td>
                <td>
                  <button
                    className="rounded"
                    onClick={() => deleteCategoryHandler(category.value)}
                  >
                    <i className="bi bi-trash delete-icon-color set-cursor"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryScreen;

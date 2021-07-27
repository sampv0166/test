import { Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Sidebar.css';

const Sidebar = ({ user }) => {
  return (
    <div className="mx-4 ">
      {console.log(user)}
      <Row>
        {         
          user.user.permissionslist.user || user.user?.name === "admin" ? (
          <LinkContainer to="/user">
            <div className="link-button py-3 my-3 rounded ">
              <span className="button-icon">
                <i className="bi bi-person"></i>
              </span>
              <span className="button-text">Users</span>
            </div>
          </LinkContainer>
          ) : (
          ""
        )
        }
        {
         user.user.permissionslist.shop ? (
          <LinkContainer className="list-group-item" to="/shop">
            <div className="link-button py-3 my-3  rounded">
              <span className="button-icon">
                <i className="bi bi-shop"></i>
              </span>
              <span className="button-text">Shop</span>
            </div>
          </LinkContainer>
          ) : (
          ""
        )
        }

        {
          /*user.user.permissionslist.product ? (*/
          <LinkContainer className="list-group-item" to="/product">
            <div className="link-button py-3 my-3 rounded">
              <span className="button-icon">
                <i className="bi bi-box "></i>
              </span>
              <span className="button-text">Product</span>
            </div>
          </LinkContainer>
          /*) : (
          ""
        )*/
        }

        {
          /*user.user.permissionslist.category ? (*/
          <LinkContainer className="list-group-item" to="/category">
            <div className="link-button py-3 my-3 rounded">
              <span className="button-icon">
                <i className="bi bi-box-seam"></i>
              </span>
              <span className="button-text">Category</span>
            </div>
          </LinkContainer>
          /*) : (
          ""
        )*/
        }

{
          /*user.user.permissionslist.category ? (*
          /*) : (
          ""
        )*/
        }
      </Row>
    </div>
  );
};

export default Sidebar;

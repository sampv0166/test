import React from 'react';
import { Row} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="w-100">
      <Row>
        <LinkContainer  to="/user">
          <div className="link-button py-3 my-1 rounded">
            <span className="button-icon">
              <i className="bi bi-person"></i>
            </span>
            <span className="button-text">Users</span>
          </div>
        </LinkContainer>

        <LinkContainer className="list-group-item" to="/shop">
          <div className="link-button py-3 my-1 rounded">
            <span className="button-icon">
              <i className="bi bi-shop"></i>
            </span>
            <span className="button-text">Shop</span>
          </div>
        </LinkContainer>
        <LinkContainer className="list-group-item" to="/product">
          <div className="link-button py-3 my-1 rounded">
            <span className="button-icon">
              <i className="bi bi-box "></i>
            </span>
            <span className="button-text">Product</span>
          </div>
        </LinkContainer>
        <LinkContainer className="list-group-item" to="/category">
          <div className="link-button py-3 my-1 rounded">
            <span className="button-icon">
              <i className="bi bi-box-seam"></i>
            </span>
            <span className="button-text">Category</span>
          </div>
        </LinkContainer>       
      </Row>
    </div>
  );
};

export default Sidebar;

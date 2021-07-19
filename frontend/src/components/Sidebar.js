import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      
      <div className="list-group">
        <LinkContainer className="list-group-item" to="/user">
          <div className="btn link-button">
            <span className="button-icon">
              <i className="bi bi-person"></i>
            </span>
            <span className="button-text">Users</span>
          </div>
        </LinkContainer>
        <LinkContainer className="list-group-item" to="/shop">
          <div className="btn link-button">
            <span className="button-icon">
              <i className="bi bi-shop"></i>
            </span>
            <span className="button-text">Shop</span>
          </div>
        </LinkContainer>
        <LinkContainer className="list-group-item" to="/product">
          <div className="btn link-button">
            <span className="button-icon">
              <i className="bi bi-box "></i>
            </span>
            <span className="button-text">Product</span>
          </div>
        </LinkContainer>
        <LinkContainer className="list-group-item" to="/category">
          <div className="btn link-button">
            <span className="button-icon">
              <i className="bi bi-box-seam"></i>
            </span>
            <span className="button-text">Category</span>
          </div>
        </LinkContainer>
        <LinkContainer className="list-group-item" to="/subcategory">
          <div className="btn link-button">
            <span className="button-icon">
            <i className="bi bi-box-seam"></i>
            </span>
            <span className="button-text">Sub Category</span>
          </div>
        </LinkContainer>
      </div>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

const MainScreenHeader = ({ buttonLabel, link }) => {
  return (
    <div className="rounded-3 py-2">
      <LinkContainer className="list-group-item" to={link}>
        <div className="mx-1 py-3 link-button mb-2 text-nowrap">
          <span className="button-icon">
            <i className="bi bi-plus-circle"></i>
          </span>
          <span className="button-text">{buttonLabel}</span>
        </div>
      </LinkContainer>
    </div>
  );
};

export default MainScreenHeader;

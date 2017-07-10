import React from 'react';
import { renderRoutes } from 'react-router-config';
import { shape } from 'prop-types';
import Header from './Header';

const LayoutHeader = ({route, location}, {router}) => (
  <div className="App">
    <Header />
    {renderRoutes(route.routes, { key: location.pathname,})}
  </div>
);

LayoutHeader.propTypes = {
  location: shape({}),
};

export default LayoutHeader;

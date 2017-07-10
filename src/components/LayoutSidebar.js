import React from 'react';
import { renderRoutes } from 'react-router-config';
import { shape } from 'prop-types';
import Header from './Header';

const LayoutSidebar = ({route, location}, {router}) => (
  <div className="App">
    <Header />
    <h1>Sidebar</h1>
    {renderRoutes(route.routes, { key: location.pathname,})}
  </div>
);

LayoutSidebar.propTypes = {
  location: shape({}),
};

export default LayoutSidebar;

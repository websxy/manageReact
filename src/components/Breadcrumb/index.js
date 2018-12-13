import React from 'react';
import NavLink from 'umi/navlink';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

const routes = [
    { path: '/', breadcrumb: '首页' },
];
  
export default withBreadcrumbs(routes)(({ breadcrumbs }) => (
    <div style={{ padding: '15px 20px 5px'}}>
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={breadcrumb.key}>
          <NavLink to={ breadcrumb.props.match.url}>
            {breadcrumb}
          </NavLink>
          {(index < breadcrumbs.length - 1) && <i> / </i>}
        </span>
      ))}
    </div>
  ));
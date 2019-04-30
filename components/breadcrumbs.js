import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Row } from 'antd';
import styles from '../styles/style.scss';

const Breadcrumbs = ({ breadcrumb }) => (
  <Row type='flex' justify='center'>
    <div className='breadcrumb'>
      <Breadcrumb separator='>'>
        {
          breadcrumb && breadcrumb.map(breadcrumbItem => <Breadcrumb.Item key={`breadcrumb_${breadcrumbItem}`}>{breadcrumbItem}</Breadcrumb.Item>)
        }
      </Breadcrumb>
    </div>
    <style jsx>
      {
        styles
      }
    </style>
  </Row>
);

Breadcrumbs.propTypes = {
  breadcrumb: PropTypes.array.isRequired,
};

export default Breadcrumbs;

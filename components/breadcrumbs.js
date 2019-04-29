import React from 'react';
import styles from '../styles/style.scss';
import { Breadcrumb, Row } from 'antd';

const Breadcrumbs = ({breadcrumb}) => (
  <Row type='flex' justify='center' >
    <div className='breadcrumb' >
      <Breadcrumb>
        {
          breadcrumb && breadcrumb.map((breadcrumbItem, index) => <Breadcrumb.Item key={`breadcrumb_${index}`}>{breadcrumbItem}</Breadcrumb.Item>)
        }
      </Breadcrumb>
    </div>
    <style jsx>{
      styles
    }</style>
  </Row>
)

export default Breadcrumbs

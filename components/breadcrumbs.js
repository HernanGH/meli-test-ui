import React from 'react';
import styles from '../styles/style.scss';
import { Breadcrumb, Row } from 'antd';

const Breadcrumbs = () => (
  <Row type="flex" justify="center" >
    <div style={{width: '75%', paddingLeft: '5px'}}>
      <Breadcrumb className='breadcrumb'>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
        <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    </div>
    <style jsx>{
      styles
    }</style>
  </Row>
)

export default Breadcrumbs

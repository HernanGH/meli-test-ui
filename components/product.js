import React from 'react';
import styles from '../styles/style.scss';
import { Card, Row, Col } from 'antd';

const Product = ({product}) => {
  console.log('Product');
  return (
  <Row type="flex" justify="center" >
    <Card style={{height:'220px', width: '75%' }}>
      <div style={{ float: 'left', width: '25%', paddingLeft: '5px', minWidth: '165px'}}>
        <img  style={{height: '160px', width: '160px'}}src='http://mla-s1-p.mlstatic.com/936932-MLA27822107016_072018-I.jpg' />
      </div>
      <div style={{ float: 'left', width: '55%', textAlign: 'center'}}>
        <p>
          $ 90000
        </p>
        <p>
          PAGALA EN 48 CUOTAS CONVENIO HONDA BANCO NACIÓN
        </p>
      </div>
      <div style={{ float: 'left', width: '20%', textAlign: 'center'}}>
        <p>Capital Federal</p>
      </div>
    </Card>
    <style jsx>{
      styles
    }</style>
  </Row>
  )
}
export default Product;

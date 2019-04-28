import React from 'react';
import Link from 'next/link';
import styles from '../styles/style.scss';
import { Card, Row, Col } from 'antd';

const Product = ({product}) => {
  const { 
    picture, price, title, id,
  } = product;
  const detailUrl = '/items/' + id;
  return (
  <Row type='flex' justify='center' >
    <Card className='card-container-list'>
      <Row type='flex' justify='space-between'>
        <Col span={3}>
          <Link prefetch href={detailUrl} >
            <img src={picture} />
          </Link>
        </Col>
        <Col span={10}>
          <p>
            $ {price.amount}
          </p>
          <Link prefetch href={detailUrl} >
            <p>
              {title}
            </p>
          </Link>        
        </Col>
        <Col span={5}>
          <p>Capital Federal</p>
        </Col>
      </Row>
    </Card>
    <style jsx>{
      styles
    }</style>
  </Row>
  )
}
export default Product;

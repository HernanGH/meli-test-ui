import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Row, Col } from 'antd';
import styles from '../styles/style.scss';

const freeShippinImg = './static/assets/ic_shipping.png';
const bodyStyle = { padding: 0 };
const Product = ({ product }) => {
  const {
    picture, price, title, id,
  } = product;
  const detailUrl = `/items/${id}`;
  return (
    <Row type='flex' justify='center' >
      <Card className='card-container-list' bodyStyle={bodyStyle}>
        <Row type='flex' justify='space-between'>
          <Col span={5}>
            <Link prefetch href={detailUrl} >
              <img className='image-product' src={picture} />
            </Link>
          </Col>
          <Col span={10} className='information-product-item'>
            <Row type='flex' justify='start'>
              <Col span={8} className='price-product-box'>
                <Link prefetch href={detailUrl} >
                  <p className='price-product-item'>
                    $ {Math.trunc(price.amount).toLocaleString()}
                  </p>
                </Link>
              </Col>
              <Col span={4}>
                {
                  product.free_shipping && <img className='image-shipping' src={freeShippinImg} />
                }
              </Col>
            </Row>
            <Row>
              <Link prefetch href={detailUrl} >
                <span className='title-product-item'>
                  {title}
                </span>
              </Link>
            </Row>
          </Col>
          <Col span={5} className='information-product-item'>
            <p className='address'>{product.address}</p>
          </Col>
        </Row>
      </Card>
      <style jsx>{
        styles
      }</style>
    </Row>
  );
};

Product.prototype = {
  product: PropTypes.object,
};

export default Product;

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Row, Col } from 'antd';
import styles from '../styles/style.scss';

const freeShippinImg = './static/assets/ic_shipping.png';
const Product = ({ product }) => {
  const {
    picture, price, title, id,
  } = product;
  const detailUrl = `/items/${id}`;
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
          <Col span={5}>
            <p>{product.address}</p>
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

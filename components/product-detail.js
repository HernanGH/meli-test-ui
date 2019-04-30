import React from 'react';
import {
  Card, Row, Col, Button, Typography,
} from 'antd';
import PropTypes from 'prop-types';
import styles from '../styles/style.scss';

const { Text } = Typography;

const Product = ({ product }) => {
  const {
    picture, title, price, description,
  } = product;
  return (
    <Row type='flex' justify='center'>
      <Card className='card-container-detail'>
        <Row>
          <Col span={16} >
            <img className='product-image' src={picture} />
          </Col>
          <Col span={8} className='product-detail-box'>
            <p className='subtitle-product-detail'>Nuevo - 235 vendidos </p>
            <h1 className='title-product-detail'>
              {title}
            </h1>
            <h1 className='price-product-detail'>
              $ {Math.trunc(price.amount).toLocaleString()}
            </h1>
            <span className='decimals'>{price.decimals}</span>
            <Button type='primary' value='large' block>Comprar</Button>
          </Col>
        </Row>
        <Row className='description-box'>
          <Col span={16}>
            <h2 className='description-product-detail'>Descripcion del Producto</h2>
            <Text>
              {description}
            </Text>
          </Col>
        </Row>
      </Card>
      <style jsx>{
        styles
      }</style>
    </Row>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;

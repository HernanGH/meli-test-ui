import React from 'react';
import styles from '../styles/style.scss';
import { 
  Card, Row, Col, Button, Typography
 } from 'antd';
const { Text } = Typography;

const Product = ({product}) => {
  const {
    picture, title, price, description
  } = product;
  return (
  <Row type='flex' justify='center'>
    <Card className='card-container-detail'>
    <Row>
      <Col span={16} >
          <img className='product-image' src={picture} />
      </Col>
      <Col span={8} >
        <p>Nuevo - 235 vendidios </p>
        <h1 className='title-product-detail'>
            {title}
        </h1>
        <div className='price-product-detail'>
          $ {Math.trunc(price.amount).toLocaleString()}
          <span>{price.decimals}</span>
        </div>
        <Button  type='primary' value='large' block>Comprar</Button>
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
  )
}
export default Product;

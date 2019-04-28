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
        <h1>
            {title}
        </h1>
        <h1>
          $ {price.amount}.<span>{price.decimals}</span>
        </h1>
        <Button  type='primary' value='large' block>Comprar</Button>
      </Col>
    </Row>
    <Row>
      <Col span={16}>
      <h2>Descripcion del Producto</h2>
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

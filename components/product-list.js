import React from 'react';
import styles from '../styles/style.scss';
import Product from './product';
import { Layout } from 'antd';
const { Content } = Layout;

const ProductList = ({products}) => {
    return (
      <>
      {
          products.map((product, index) => <Product key={`product_${index}`} product={product} />)
      }
    <style jsx>{
      styles
    }</style>
    </>)
}
export default ProductList

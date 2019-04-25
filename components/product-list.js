import React from 'react';
import styles from '../styles/style.scss';
import Product from './product';
import { Layout } from 'antd';
const { Content } = Layout;

const ProductList = ({products}) => {
    console.log('ProductList');
    return (
        <>
      {
          products.map((product) => <Product product={product} />)
      }
    <style jsx>{
      styles
    }</style>
    </>)
}
export default ProductList

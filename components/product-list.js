import React from 'react';
import { array } from 'prop-types';
import Product from './product';
import styles from '../styles/style.scss';

const ProductList = ({ products }) => (
  <>
    {
      products.map((product, index) => <Product key={`product_${index}`} product={product} />)
    }
    <style jsx>{
      styles
    }</style>
  </>
);

ProductList.prototype = {
  products: array,
};

export default ProductList;

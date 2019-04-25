import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import Breadcrumbs from '../components/breadcrumbs';
import ProductList from '../components/product-list';
import styles from '../styles/style.scss';
import { 
  Button, Row
} from 'antd';

const products = [
  {}, {}
];

const Home = () => (
  <div>
    <Head title='Mercado Libre' />
    <Nav />
    <Row>
      <Breadcrumbs />
      <ProductList products={products}/>
    </Row>

    <style jsx>
    {styles}
    </style>
  </div>
)

export default Home

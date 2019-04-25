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

const Items = () => (
  <div>
    <Head title='Mercado Libre' />
    <Nav />
    <Row>
      <Breadcrumbs />

    </Row>
  </div>
);

export default Items

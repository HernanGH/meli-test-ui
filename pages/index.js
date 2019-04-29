import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import styles from '../styles/style.scss';

const Home = () => (
  <div>
    <Head title='Mercado Libre' />
    <Nav />
    <style jsx>
      {styles}
    </style>
  </div>
)

export default Home

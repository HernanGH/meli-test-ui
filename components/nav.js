import React from 'react';
import Link from 'next/link';
import styles from '../styles/style.scss';
import { Button, Row } from 'antd';

const Nav = () => (
  <Row type="flex" justify="center" className='nav-container' >
    <nav className='nav-search' >
      <ul style={{paddingLeft: '0px'}}>
        <li>
          <Link prefetch href="/">
            <img src='./static/assets/Logo_ML.png'></img>
          </Link>
        </li>
        <li style={{width: '100%'}}>
          <div className='search-box'>
            <input className='input-search' placeholder='Nunca dejes de buscar' style={{width: '100%'}} ></input>
            <Button className='search-btn' style={{height: '40px'}}>
              <img  src='../static/assets/ic_Search.png'></img>
            </Button>
          </div>
        </li>
      </ul>
      <style jsx>{
        styles
      }</style>
    </nav>
  </Row>
)

export default Nav

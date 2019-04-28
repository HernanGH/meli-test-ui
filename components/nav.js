import React from 'react';
import Link from 'next/link';
import styles from '../styles/style.scss';
import { Button, Row, Input } from 'antd';
import Router from 'next/router';

class Nav extends React.Component {
  state = {
    searchWord: '',
  }

  onChange = (e) => {
    const { value } = e.target;
    this.setState({searchWord: value});
  };

  render() {
    const { searchWord } = this.state;
    const searchUrl = searchWord ? `/items?search=${searchWord}` : `/`;
    return (
      <Row type='flex' justify='center' className='nav-container' >
        <nav className='nav-search' >
          <ul>
            <li>
              <Link prefetch href='/'>
                <img src='./static/assets/Logo_ML.png' />
              </Link>
            </li>
            <li className='search-container'>
              <div className='search-box'>
                <Input value={searchWord} placeholder='Nunca dejes de buscar' onChange={this.onChange} onPressEnter={() => Router.push(searchUrl)} />
                <Link href={searchUrl}>
                  <Button>
                    <img  src='../static/assets/ic_Search.png' />
                  </Button>
                </Link>
              </div>
            </li>
          </ul>
          <style jsx>{
            styles
          }</style>
        </nav>
      </Row>
    );
  }
}
export default Nav;

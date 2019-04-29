import React from 'react';
import Link from 'next/link';
import { Button, Row, Input } from 'antd';
import Router from 'next/router';
import { string } from 'prop-types';
import styles from '../styles/style.scss';

class Nav extends React.Component {
  state = {
    searchWord: '',
  }

  onChange = (e) => {
    const { value } = e.target;
    this.setState({ searchWord: value, searchedWord: '' });
  };

  render() {
    const { searchWord } = this.state;
    const { searchedWord } = this.props;
    const searchUrl = searchWord ? `/items?search=${searchWord}` : '/';
    return (
      <Row type='flex' justify='center' className='nav-container' >
        <nav className='nav-search' >
          <ul>
            <li>
              <Link href='/'>
                <img src='http://localhost:3000/static/assets/Logo_ML.png' />
              </Link>
            </li>
            <li className='search-container'>
              <div className='search-box'>
                <Input value={searchWord || searchedWord} placeholder='Nunca dejes de buscar' onChange={this.onChange} onPressEnter={() => Router.push(searchUrl)} />
                <Link prefetch href={searchUrl} >
                  <Button>
                    <img src='http://localhost:3000/static/assets/ic_Search.png' />
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

Nav.propTypes = {
  searchedWord: string,
};

export default Nav;

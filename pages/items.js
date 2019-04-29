import React from 'react';
import {
  Row, Empty,
} from 'antd';
import Breadcrumbs from '../components/breadcrumbs';
import ProductDetail from '../components/product-detail';
import ProductList from '../components/product-list';
import Head from '../components/head';
import Nav from '../components/nav';
import { itemService } from '../services/item';
import styles from '../styles/style.scss';

class Items extends React.Component {
  static getInitialProps({ query }) {
    const { search, id } = query;
    if (search && !id) {
      return itemService.searchItems(search)
        .then(({ data }) => ({ search, products: data.items, breadcrumb: data.breadcrumb }));
    }
    if (id) {
      return itemService.getItem(id)
        .then(({ data }) => ({ search, product: data.item, breadcrumb: data.breadcrumb }));
    }
    return { search, products: [] };
  }

  getDescription = () => {
    const { search, product, breadcrumb } = this.props;
    if (search) {
      return `Encontrá ${search} - ${breadcrumb.join(' - ')}`;
    }
    return product && product.description;
  }

  render() {
    const {
      search, products, product, breadcrumb,
    } = this.props;
    return (<div>
      <Head title={search || (product && product.title) }
        description={this.getDescription()}
      />
      <Nav searchedWord={search || ''} />
      <Row>
        <Breadcrumbs breadcrumb={breadcrumb}/>
        {
          products && products.length
          && <ProductList products={products}/>
        }
        {
          product && <ProductDetail product={product}/>
        }
        {
          !products && !product && <Empty
            description={
              <span>Lo sentimos! No se han encontrado resultados</span>
            } />
        }
      </Row>
      <style jsx>
        {styles}
      </style>
    </div>
    );
  }
}

export default Items;

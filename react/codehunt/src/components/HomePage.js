import React, { Component } from 'react';
import ProductList from './ProductList';
import Navbar from './Navbar';
import Firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyATfOCWDk6DgPhQpKHonxQEXS6Xu8pMcQU',
  authDomain: 'tutorials-8eedb.firebaseapp.com',
  databaseURL: 'https://tutorials-8eedb.firebaseio.com',
  storageBucket: 'tutorials-8eedb.appspot.com',
  messagingSenderId: '699891750341'
};

Firebase.initializeApp(config);

class HomePage extends Component {
  constructor () {
    super();
    this.state = {
      productList: []
    };
    Firebase.database().ref('products').on('value', (snapshot) => {
      var products = snapshot.val();
      var productArr = Object.keys(products).map(function (key) {
        return products[key];
      });
      this.setState({
        productList: productArr
      });
    });
  }

  render () {
    console.log(this.state.productList);
    return (
      <section>
        <Navbar user={false} />
        <header>
          <img src='/img/banner.jpeg' width='100%' alt='' />
        </header>
        <section>
          <section className='container'>
            {this.state.productList ? <ProductList productList={this.state.productList} /> : null}
          </section>
        </section>
      </section>
    );
  }
}

export default HomePage;

import React from 'react';
import {Route, IndexRoute} from 'react-router';
import ProductsLayout from './components/ProductsLayout/component';
import ProductDetailsRoutes from './components/ProductDetails/routes';
import App from './App';

// should appear in store
const testEntries = [
  {
    id: "1",
    name: "Canon EOS 5D",
    imgURL: "img/canon.png",
    price: 2000
  },
  {
    id: "2",
    name: "Bowling Shoes",
    imgURL: "img/obuv.png",
    price: 46
  },

];

class ProductsLayoutWithEntries extends React.Component {
  render() {
    return (
      <ProductsLayout entries={testEntries} />
    );
  }
}

export default (
  <Route component={App} path = {App.path}>
    <IndexRoute component={ProductsLayoutWithEntries}/>

    {ProductDetailsRoutes}

  </Route>
)

import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MainPage from './components/MainPage/component';
import ProductsLayoutRoutes from './components/ProductsLayout/routes';
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

// TODO for test only, should be replaced to ProductsLayout connected to store
class ProductsLayoutWithTestEntries extends React.Component {
  render() {
    return (
      <ProductsLayout entries={testEntries} />
    );
  }
}

//     {ProductsLayoutRoutes}

export default (
  <Route component={App} path = {App.path}>
    <Route component={MainPage} path='/'>
      {ProductsLayoutRoutes}
      {ProductDetailsRoutes}
    </Route>

  </Route>
)

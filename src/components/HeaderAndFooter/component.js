import React from 'react';
import {showModal as showBasketModal} from '../Basket/actions';
import BasketModal from '../Basket/component';
import {connect} from 'react-redux';
import {Link} from 'react-router';

// presentation component
class HeaderAndFooter extends React.Component {
  static propTypes = {
    children: React.PropTypes.any.isRequired
  };

  render() {
    return (
    <div className="content-block">

      <div className="goods-bordering-block">

        <div className="top-panel">

          <div className="panel-addons">

            <div className="social-networks">
              <img src="/img/facebook.png" />
              <img src="/img/twitter.png" />
              <img src="/img/linkedin.png" />
              <img src="/img/rss.png" />
            </div>

            <div className="search-bar">
              <input type="text" name="searchsite" value="" placeholder="Search this site" />
              <button type="button">&thinsp;</button>
            </div>

          </div>

          <Link to="/">Home</Link>
          <Link to="#">Category</Link>
          <Link to="#">Contact</Link>
          <Link to="#">About</Link>
          <Link to="#">Home</Link>
          <Link to="#">Category</Link>
          <Link to="#">Contact</Link>
          <Link to="#">About</Link>

        </div>

        <div className="navigation-block">


          <div className="logo-area">
            <div className="logo">
              <img src="/img/logo.png" />
              <p className="logo-description">The best ecommerce blogger template</p>
            </div>
          </div>

          <div className="banner-wrapper">
            <img src="/img/522x74.png" />
          </div>

          <div className="navigation-bar-area">


            <div className="navigation-bar">

              <div className="order-basket" onClick={()=>this.props.dispatch(showBasketModal())}>
                <div>
                  <img src="/img/greenbasket.png" />
                  <BasketModal />
                </div>
                <div>
                  <p className="items-in-basket">
                    <span>My Cart : </span>
                    <span className="items-in-basket-value">{this.props.itemsInBasket}</span>
                    <span> item(s)</span>
                  </p>
                  <p className="basket-total-price">
                    <span>Total Price : </span>
                    <span className="basket-total-price-value">${this.props.totalPrice}</span>
                  </p>
                </div>
              </div>

              <Link to="/">Home</Link>
              <Link to="#">Product Category</Link>
              <Link to="#">Sample Page</Link>
              <Link to="#">How To Use?</Link>
              <Link to="#">Get it!</Link>


            </div>
          </div>
        </div>
      </div>

      {this.props.children}

      <div className="footer-block goods-bordering-block">
        <div className="about">
          <p className="copyright">Copyright 2011 <Link to="#">Blogger Store v.2</Link></p>
          <p className="powered-by">Powered by Blogger. Design by <Link to="#">Java Templates - Blogger Templates 2012</Link></p>
        </div>
        <Link className="center-vertically" to="#"><img src="/img/google-checkout.png" /></Link>
        <Link className="center-vertically" to="#"><img src="/img/paypal-payment.png" /></Link>
        <div></div>
      </div>

    </div>

    );
  }
}

const mapStateToProps = function(state) {
  return {
    itemsInBasket: state.basket.totalItemsCount,
    totalPrice: state.basket.totalPrice,
  };
}

export default connect(mapStateToProps)(HeaderAndFooter);

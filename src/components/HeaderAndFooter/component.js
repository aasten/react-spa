import React from 'react';

// presentation component
export default class HeaderAndFooter extends React.Component {
  static propTypes = {
    children: React.PropTypes.any.isRequired
  };

  render() {
    return (
    <div>

      <div className="goods-bordering-block">

        <div className="top-panel">

          <div className="panel-addons">

            <div className="social-networks">
              <img src="img/facebook.png" />
              <img src="img/twitter.png" />
              <img src="img/linkedin.png" />
              <img src="img/rss.png" />
            </div>

            <div className="search-bar">
              <input type="text" name="searchsite" value="" placeholder="Search this site" />
              <button type="button">&thinsp;</button>
            </div>

          </div>

          <a href="#">Home</a>
          <a href="#">Category</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
          <a href="#">Home</a>
          <a href="#">Category</a>
          <a href="#">Contact</a>
          <a href="#">About</a>

        </div>

        <div className="navigation-block">


          <div className="logo-area">
            <div className="logo">
              <img src="img/logo.png" />
              <p className="logo-description">The best ecommerce blogger template</p>
            </div>
          </div>

          <div className="banner-wrapper">
            <img src="http://placehold.it/522x74" />
          </div>

          <div className="navigation-bar-area">


            <div className="navigation-bar">

              <div className="order-basket">
                <div>
                  <a href="#">
                    <img src="img/greenbasket.png" />
                  </a>
                </div>
                <div>
                  <p className="items-in-basket">
                    <span>My Cart :</span>
                    <span className="items-in-basket-value"></span>
                    <span>item(s)</span>
                  </p>
                  <p className="basket-total-price">
                    <span>Total Price :</span>
                    <span className="basket-total-price-value"></span>
                  </p>
                </div>
              </div>

              <a href="#">Home</a>
              <a href="#">Product Category</a>
              <a href="#">Sample Page</a>
              <a href="#">How To Use?</a>
              <a href="#">Get it!</a>


            </div>
          </div>
        </div>
      </div>

      {this.props.children}

      <div className="footer-block goods-bordering-block">
        <div className="about">
          <p className="copyright">Copyright 2011 <a href="#">Blogger Store v.2</a></p>
          <p className="powered-by">Powered by Blogger. Design by <a href="#">Java Templates - Blogger Templates 2012</a></p>
        </div>
        <a className="center-vertically" href="#"><img src="img/google-checkout.png" /></a>
        <a className="center-vertically" href="#"><img src="img/paypal-payment.png" /></a>
        <div></div>
      </div>

    </div>

    );
  }
}

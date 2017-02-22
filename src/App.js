import React, { Component } from 'react';
import basecss from './base.css';
import css from './style.css';
import HeaderAndFooter from './components/HeaderAndFooter/component';

export default class App extends Component {
  static propTypes = {
    children: React.PropTypes.any.isRequired
  };
  static path = '/';
  render() {
    return (
      <div className="content-block">
        <HeaderAndFooter>
          {this.props.children}
        </HeaderAndFooter>
      </div>
    );
  }
}


{/* <div className="content-block">

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



<div className="goods-block">

  <div className="goods-filtering">

    <div className="filtering-block">
      <div className="filter-categories-name background-panel">Product category</div>
      <div className="filter-categories-list">
        <ul>
          <li><a href="#">Camera (2)</a></li>
          <li><a href="#">Computers (1)</a></li>
          <li><a href="#">Electronic (2)</a></li>
          <li><a href="#">Featured (10)</a></li>
          <li><a href="#">Gadget (1)</a></li>
          <li><a href="#">Parfume (1)</a></li>
          <li><a href="#">Phone (1)</a></li>
          <li><a href="#">Shoes (2)</a></li>
        </ul>
      </div>
    </div>

    <div className="filtering-block">
      <div className="filter-categories-name background-panel">Labels</div>
      <div className="filter-categories-list">
        <ul>
          <li><a href="#">Camera (2)</a></li>
          <li><a href="#">Computers (1)</a></li>
          <li><a href="#">Electronic (2)</a></li>
          <li><a href="#">Featured (10)</a></li>
          <li><a href="#">Gadget (1)</a></li>
          <li><a href="#">Parfume (1)</a></li>
          <li><a href="#">Phone (1)</a></li>
          <li><a href="#">Shoes (2)</a></li>
        </ul>
      </div>
    </div>

  </div>

  <div className="goods-layout">


    <div className="slider">
      <div className="slider-line center-vertically">
      </div>
      <div className="arrow-image left-arrow center-vertically">
        <img src="img/slider-left-arrow.png" />
      </div>
      <div className="arrow-image right-arrow center-vertically">
        <img src="img/slider-right-arrow.png" />
      </div>
    </div>


    <div className="manage-layout layout-control-panel background-panel">
      <button className="grid-layout background-panel basic-layout-button">Grid</button>
      <button className="detail-layout background-panel basic-layout-button">Detail</button>
    </div>

    <div className="product-entry">
      <div className="product-name background-panel">
        Bowling shoes
      </div>
      <div className="product-content">
        <div className="product-photo-area">
          <img className="product-photo" src="img/obuv.png" alt="" />
        </div>
        <div className="product-price">
          $46
        </div>

        <div className="product-actions">
          <button className="add-to-cart action-button">
            Add to cart
          </button>
          <button className="more-info action-button">
            More info
          </button>
        </div>
      </div>

    </div>

    <div className="product-entry">
      <div className="product-name background-panel">
        Canon EOS 5D
      </div>
      <div className="product-content">
        <div className="product-photo-area">
          <img className="product-photo" src="img/canon.png" alt="" />
        </div>
        <div className="product-price">
          $46
        </div>

        <div className="product-actions">
          <button className="add-to-cart action-button">
            Add to cart
          </button>
          <MoreInfoButton entryId="1"/>
        </div>
      </div>

    </div>

    <div className="product-entry">
      <div className="product-name background-panel">
        Bowling shoes
      </div>
      <div className="product-content">
        <div className="product-photo-area">
          <img className="product-photo" src="img/obuv.png" alt="" />
        </div>
        <div className="product-price">
          $46
        </div>

        <div className="product-actions">
          <button className="add-to-cart action-button">
            Add to cart
          </button>
          <button className="more-info action-button">
            More info
          </button>
        </div>
      </div>

    </div>

    <div className="product-entry">
      <div className="product-name background-panel">
        Bowling shoes
      </div>
      <div className="product-content">
        <div className="product-photo-area">
          <img className="product-photo" src="img/obuv.png" alt="" />
        </div>
        <div className="product-price">
          $46
        </div>

        <div className="product-actions">
          <button className="add-to-cart action-button">
            Add to cart
          </button>
          <button className="more-info action-button">
            More info
          </button>
        </div>
      </div>

    </div>

    <div className="pagination-bar layout-control-panel background-panel">
      <span className="page-right"><a href="#">Next Product &raquo;</a></span>
      <span className="page-left"><a href="#">&laquo; Previous Product</a></span>
      <span><a href="#">Home</a></span>
    </div>

  </div>

</div>



<div className="footer-block goods-bordering-block">
  <div className="about">
    <p className="copyright">Copyright 2011 <a href="#">Blogger Store v.2</a></p>
    <p className="powered-by">Powered by Blogger. Design by <a href="#">Java Templates - Blogger Templates 2012</a></p>
  </div>
  <a className="center-vertically" href="#"><img src="img/google-checkout.png" /></a>
  <a className="center-vertically" href="#"><img src="img/paypal-payment.png" /></a>
  <div></div>
</div>

</div> */}

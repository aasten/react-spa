import React from 'react';
import basecss from '../../base.css';
import css from '../../style.css';
import ProductEntry from '../ProductEntry/component';

export default class ProductsLayout extends React.Component {

  static propTypes = {
    entries: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      imgURL: React.PropTypes.string.isRequired,
      price: React.PropTypes.number.isRequired})).isRequired
  }

  render() {
    const entries = this.props.entries;

    return (
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

          {entries.map((display,i) => <ProductEntry display={display} key={i} />)}

          <div className="pagination-bar layout-control-panel background-panel">
            <span className="page-right"><a href="#">Next Product &raquo;</a></span>
            <span className="page-left"><a href="#">&laquo; Previous Product</a></span>
            <span><a href="#">Home</a></span>
          </div>

        </div>

      </div>
    );
  }
}


// const mapStateToProps = function(state) {
//   return {
//     entries: state.productsLayout.displayedEntries,
//   };
// }
//
// export default connect(mapStateToProps)(ProductsLayout);

{/* <div className="product-entry">
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
      <a className="add-to-cart action-button">
        Add to cart
      </a>
      <a className="more-info action-button">
        More info
      </a>
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
      <a className="add-to-cart action-button">
        Add to cart
      </a>
      <a className="more-info action-button">
        More info
      </a>
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
      <a className="add-to-cart action-button">
        Add to cart
      </a>
      <a className="more-info action-button">
        More info
      </a>
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
      <a className="add-to-cart action-button">
        Add to cart
      </a>
      <a className="more-info action-button">
        More info
      </a>
    </div>
  </div>

</div> */}

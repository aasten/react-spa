import React from 'react';
import basecss from '../../base.css';
import css from '../../style.css';

export default class ProductsLayout extends React.Component {

  render() {
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
    );
  }
}

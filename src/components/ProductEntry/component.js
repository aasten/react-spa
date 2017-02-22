import React from 'react';
import basecss from '../../base.css';
import css from '../../style.css';


export default class ProductEntry extends React.Component {
  static propTypes = {
    display: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      imgURL: React.PropTypes.string.isRequired,
      price: React.PropTypes.number.isRequired}).isRequired
  }

  render() {
    const display = this.props.display;
    return (
      <div className="product-entry">
        <div className="product-name background-panel">
          {display.name}
        </div>
        <div className="product-content">
          <div className="product-photo-area">
            <img className="product-photo" src={display.imgURL} alt="No photo available" />
          </div>
          <div className="product-price">
            ${display.price}
          </div>

          <div className="product-actions">
            <a className="add-to-cart action-button">
              Add to cart
            </a>
            <a className="more-info action-button" href={"/details/"+display.id}>
              More info
            </a>
          </div>
        </div>
      </div>
    );
  }
}

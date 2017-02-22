import React from 'react';
import basecss from '../../../css/base.css';
import css from '../../../css/style.css';
import {addToBasket} from '../Basket/actions';
import {connect} from 'react-redux';

class ProductEntry extends React.Component {
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
            <a className="add-to-cart action-button" onClick={()=>this.props.dispatch(addToBasket(display.id,display.name,display.price))}>
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

const mapStateToProps = function(state) {
  return {
    state
  };
}
// to make possible action dispatching
export default connect(mapStateToProps)(ProductEntry);

import React from 'react';
import basecss from '../../../css/base.css';
import css from '../../../css/style.css';
import {addToBasket} from '../Basket/actions';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Code2sym from '../../utility/currencyDisplay';


class ProductEntry extends React.Component {
  static propTypes = {
    display: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      imgURL: React.PropTypes.string.isRequired,
      price: React.PropTypes.shape({
        value: React.PropTypes.number.isRequired,
        currencyCodeISO4217: React.PropTypes.string.isRequired}).isRequired}).isRequired
  }

  static code2sym = new Code2sym();

  render() {
    const display = this.props.display;
    const priceString = display.price ?
      <span>
        <span>
          {this.constructor.code2sym.getSymbol(display.price.currencyCodeISO4217)}</span><span>{display.price.value}
        </span>
      </span>
      : <span>N/A</span>;
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
            {priceString}
          </div>

          <div className="product-actions">
            <Link className="add-to-cart action-button"
              onClick={()=>this.props.dispatch(addToBasket(
                display.id,display.name,display.price.value,display.price.currencyCodeISO4217))}>
              Add to cart
            </Link>
            <Link className="more-info action-button" to={"/product/"+display.id}>
              More info
            </Link>
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

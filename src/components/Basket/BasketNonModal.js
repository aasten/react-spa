import React from 'react';
import FAcss from '../../../font-awesome/css/font-awesome.css';
import css from '../../../css/shoppingcart.css';

export default class BasketNonModal extends React.Component {

  static propTypes = {
    positions: React.PropTypes.arrayOf( React.PropTypes.shape({
      id: React.PropTypes.string.isRequired, // to invoke removing by id
      name: React.PropTypes.string.isRequired,
      quantity: React.PropTypes.number.isRequired,
      price: React.PropTypes.number.isRequired}))
  }

  render() {
    if(undefined === this.props.positions || this.props.positions[0] == null) return <p>Nothing added yet to basket</p>;

    return (
    <div>
      <h1>Basket</h1>
    <div className="cart-details">
      <table>
        <tbody>
        <tr>
          <th>
            Position
          </th>
          <th>
            Quantity
          </th>
          <th>
            Price
          </th>
        </tr>
        <tr>
          <td>
            Bowling Shoes
          </td>
          <td>
            1
          </td>
          <td>
            $46
          </td>
          <td>
            <i className="fa fa-times"></i> Remove
          </td>
        </tr>

        {this.props.positions.map((o,i) =>
          <tr key={i}>
            <td>
              {o.name}
            </td>
            <td>
              {o.quantity}
            </td>
            <td>
              ${o.price}
            </td>
            <td>
              <i className="fa fa-times"></i> Remove
            </td>
          </tr>
        )}
      </tbody>
      </table>
      <button className="order-button">
        Order!
      </button>
    </div>
    </div>
    );
  }
}

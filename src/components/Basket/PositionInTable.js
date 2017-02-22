import React from 'react';
import {connect} from 'react-redux';
import {removeFromBasket} from './actions';

class PositionInTable extends React.Component {
  static propTypes = {
    pos: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired, // to invoke removing by id
      name: React.PropTypes.string.isRequired,
      quantity: React.PropTypes.number.isRequired,
      price: React.PropTypes.number.isRequired}).isRequired
  }

  render() {
    const pos = this.props.pos;
    return (
      <tr>
        <td>
          {pos.name}
        </td>
        <td>
          {pos.quantity}
        </td>
        <td>
          ${pos.price}
        </td>
        <td onClick={() => this.props.dispatch(removeFromBasket(pos.id))}>
          <i className="fa fa-times"></i> Remove
        </td>
      </tr>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    // interested only in .dispatch() method
    state
  };
}

export default connect(mapStateToProps)(PositionInTable);

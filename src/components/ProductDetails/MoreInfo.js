import React from 'react';
import basecss from '../../../css/base.css';
import productdetailscss from '../../../css/product-details.css';
// import facss from '../../../font-awesome/css/font-awesome.min.css';
import Spinner from 'react-spinner';
import {connect} from 'react-redux';
import Code2sym from '../../utility/currencyDisplay';

// presentation component
class MoreInfo extends React.Component {

  constructor() {
    super();
    this.code2sym = new Code2sym();
  }

  static propTypes = {
    details: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      imgURL: React.PropTypes.string,
      rate: React.PropTypes.oneOf([0,1,2,3,4,5]),
      price: React.PropTypes.shape({
        value:React.PropTypes.number.isRequired,
        currencyCodeISO4217: React.PropTypes.string.isRequired}),
      characteristics: React.PropTypes.arrayOf(React.PropTypes.shape({
        propName: React.PropTypes.string.isRequired,
        propName: React.PropTypes.string.isRequired})).isRequired
    }).isRequired,
  }

  static path = '/product/:id';

  render() {
    if(this.props.failure) return <p>{this.props.failure}</p>;

    const details = this.props.details;

    if(!details) return <p>No details available for the product {this.props.params.id}</p>;

    return ( this.props.isLoading ? <Spinner /> :
    <div className="product-details">
      <div className="product-image">
        <img src={details.imgURL} alt="No Photo" />
      </div>

      <div className="product-details-header">

      <h1>{details.name}</h1>

      <div className="starring">
        <div> <span>Buyers' rate:</span>
        </div>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="false"></i>
      </div>

      <p className="price">
        Price: <span className="cost">{this.code2sym.getSymbol(details.price.currencyCodeISO4217)}{details.price.value}</span>
      </p>

      </div>
      {
      details.characteristics && Array.isArray(details.characteristics) &&
      <div className="product-characteristics">
        <h2>Characteristics</h2>
        <div>
          <table>
            <tbody>
            <tr>
              <th>Category</th>
              <th>Specification</th>
            </tr>
            {
              details.characteristics.map(this.renderCharacteristicsEntry)
            }
            </tbody>
          </table>
        </div>
      </div>
      }

    </div>);
  }

  renderCharacteristicsEntry(item, index) {
    return (
    <tr key={index}>
      <td>{item.propName}</td>
      <td>{item.propValue}</td>
    </tr> );
  }
}

const mapStateToProps = function(state) {
  return {
    isLoading: state.entryDetails.isLoading,
    failure: state.entryDetails.failure,
    details: state.entryDetails.details,
  };
}

export default connect(mapStateToProps)(MoreInfo);

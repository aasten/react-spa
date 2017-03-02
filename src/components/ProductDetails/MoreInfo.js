import React from 'react';
import basecss from '../../../css/base.css';
import productdetailscss from '../../../css/product-details.css';
// import facss from '../../../font-awesome/css/font-awesome.min.css';
import Spinner from 'react-spinner';
import {connect} from 'react-redux';
import {loadEntryDetails} from '../ProductDetails/actions';
import Code2sym from '../../utility/currencyDisplay';

// presentation component
class MoreInfo extends React.Component {

  static propTypes = {
    entryDetails: React.PropTypes.shape({
      isLoading: React.PropTypes.bool,
      failure: React.PropTypes.any,
      details: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        imgURL: React.PropTypes.string,
        rate: React.PropTypes.oneOf([0,1,2,3,4,5]),
        price: React.PropTypes.shape({
          value: React.PropTypes.number.isRequired,
          currencyCodeISO4217: React.PropTypes.string.isRequired}).isRequired,
        characteristics: React.PropTypes.arrayOf(React.PropTypes.shape({
          propName: React.PropTypes.string.isRequired,
          propName: React.PropTypes.string.isRequired}))
      }).isRequired,
    }).isRequired,
  }

  static path = '/product/:id';

  static defaultProps = {
    entryDetails : {
      isLoading: false,
      details: {
        name: 'N/A',
        imgURL: '',
      }
    }
  };

  constructor() {
    super();
    this.code2sym = new Code2sym();
    Object.freeze(this.constructor.defaultProps);
  }


  componentDidMount() {
    this.props.dispatch(loadEntryDetails(this.props.params.id));
  }

  render() {

    const details = Object.assign({},
      this.constructor.defaultProps.entryDetails.details, this.props.entryDetails.details);

    return ( this.props.entryDetails.isLoading ? <Spinner /> :

    <div className="product-details">
      { this.props.entryDetails.failure && <div className="failure"><p>{this.props.entryDetails.failure}</p></div> }

      <div className="product-image">
        <img src={details.imgURL} alt="No Photo" />
      </div>

      <div className="product-details-header">

      <h1>{details.name}</h1>

      { details.rate &&
      <div className="starring">
        <div> <span>Buyers' rate:</span>
        </div>
        <i className="fa fa-star" aria-hidden={details.rate > 0 ? "true" : "false"}></i>
        <i className="fa fa-star" aria-hidden={details.rate > 1 ? "true" : "false"}></i>
        <i className="fa fa-star" aria-hidden={details.rate > 2 ? "true" : "false"}></i>
        <i className="fa fa-star" aria-hidden={details.rate > 3 ? "true" : "false"}></i>
        <i className="fa fa-star" aria-hidden={details.rate > 4 ? "true" : "false"}></i>
      </div>
      }

      {
        details.price ?
        <p className="price">
          Price: <span className="cost">{this.code2sym.getSymbol(details.price.currencyCodeISO4217)}{details.price.value}</span>
        </p>
        :
        <p className="price">Price: N/A</p>
      }

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
    entryDetails: state.entryDetails,
  };
}

export default connect(mapStateToProps)(MoreInfo);

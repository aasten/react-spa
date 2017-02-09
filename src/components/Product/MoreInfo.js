import React from 'react';
import basecss from '../../base.css';
import productdetailscss from './product-details.css';
import facss from '../../../font-awesome/css/font-awesome.min.css';


class MoreInfo extends React.Component {

  static propTypes = {
    details: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      imgURL: React.PropTypes.string,
      rate: React.PropTypes.oneOf([0,1,2,3,4,5]),
      price: React.PropTypes.number.isRequired,
      characteristics: React.PropTypes.arrayOf(React.PropTypes.shape({
        propName: React.PropTypes.string.isRequired,
        propName: React.PropTypes.string.isRequired})).isRequired
    }).isRequired,
  }

  render() {
    if(!this.props.details) return <p>No details available</p>;

    return <div className="product-details">
      <div className="product-image">
        <img src={this.props.details.imgURL} alt="No Photo" />
      </div>

      <h1>{this.props.details.name}</h1>

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
        Price: <span className="cost">{this.props.details.price}</span>
      </p>


      {
      this.props.details.characteristics && Array.isArray(this.props.details.characteristics) &&
      <div className="product-characteristics">
        <h2>Characteristics</h2>
        <div>
          <table>
            <tr>
              <th>Category</th>
              <th>Specification</th>
            </tr>
            {
              this.props.details.characteristics.map(function(prop,i){
                return <tr>
                  <td>{prop.propName}</td>
                  <td>{prop.propValue}</td>
                </tr>
              })
            }
          </table>
        </div>
      </div>
      }

    </div>;
  }
}

const extractDetailsToProps = function(store) {
  return {
    // TODO вопрос, можно ли получать через функцию (задержка и т.п.)
    details: store.getState().currentEntry.details
  };
}

export default connect(extractDetailsToProps)(MoreInfo);

/*

              for(var i=0; i < this.props.characteristics.length; i++) {
                <tr>
                  <td>{this.props.characteristics[i].propName}</td>
                  <td>{this.props.characteristics[i].propValue}</td>
                </tr>
              }
            }

<tr>
  <td>Image sensor type </td>
  <td>36 x 24 mm CMOS</td>
</tr>
<tr>
  <td>Effective Pixels </td>
  <td>Approx. 30.4 megapixels</td>
</tr>
<tr>
  <td>AF System/ Points </td>
  <td>61 Point / max of 41 cross-type AF points inc 5 dual cross type at f/2.8 and 61 points / 21 cross-type AF points at f/81</td>
</tr>
<tr>
  <td>Shutter speed</td>
  <td>30-1/8000 sec (1/2 or 1/3 stop increments), Bulb (Total shutter speed range. Available range varies by shooting mode)</td>
</tr>
*/

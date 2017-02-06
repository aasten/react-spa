// jshint esversion: 6
import React from 'react';
import basecss from '../base.css';
import productdetailscss from './product-details.css';
import facss from '../../font-awesome/css/font-awesome.min.css'


export default class MoreInfo extends React.Component {
  render() {
    return <div className="product-details">
      <div className="product-image">
        <img src="img/canon.png" alt="Product Photo" />
      </div>

      <h1>Canon EOS 5D</h1>

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
        Price: <span className="cost">2000</span>
      </p>

      <div className="buy-statistics">
        Total buyings: <span className="count-buyings">0</span>
      </div>

      <div className="product-characteristics">
        <h2>Characteristics</h2>
        <div>
          <table>
            <tr>
              <th>Category</th>
              <th>Specification</th>
            </tr>
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
          </table>
        </div>
      </div>

    </div>;
  }
}

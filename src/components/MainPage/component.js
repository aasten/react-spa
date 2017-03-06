import React from 'react';
import basecss from '../../../css/base.css';
import css from '../../../css/style.css';
import ProductsLayout from '../ProductsLayout/component';
// import {connect} from 'react-redux';
// import {loadEntriesNoCategoryFromWithCount} from './actions';

export default class MainPage extends React.Component {

  // static propTypes = {
  //   layout: React.PropTypes.shape({
  //     entries: React.PropTypes.arrayOf(React.PropTypes.shape({
  //       id: React.PropTypes.string.isRequired,
  //       name: React.PropTypes.string.isRequired,
  //       imgURL: React.PropTypes.string.isRequired,
  //       price: React.PropTypes.number.isRequired})).isRequired,
  //     countOnLayout: React.PropTypes.number.isRequired,
  //     }).isRequired,
  //   params: React.PropTypes.shape({
  //     page: React.PropTypes.number }),
  // }
  //
  // static defaultProps = {
  //   params: { page: 1 }
  // }
  //
  // static path = '/:page';
  //
  // componentDidMount() {
  //   console.log('did mount', this.props.params.page);
  //   const from = 1 + (this.props.params.page - 1)*this.props.layout.countOnLayout;
  //   this.props.dispatch(loadEntriesNoCategoryFromWithCount(from, this.props.layout.countOnLayout));
  // }

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
              <img src="/img/slider-left-arrow.png" />
            </div>
            <div className="arrow-image right-arrow center-vertically">
              <img src="/img/slider-right-arrow.png" />
            </div>
          </div>


          <div className="manage-layout layout-control-panel background-panel">
            <button className="grid-layout background-panel basic-layout-button">Grid</button>
            <button className="detail-layout background-panel basic-layout-button">Detail</button>
          </div>

          {this.props.children}

          <div className="pagination-bar layout-control-panel background-panel">
            <span className="page-right"><a href="#">Next Page &raquo;</a></span>
            <span className="page-left"><a href="#">&laquo; Previous Page</a></span>
            <span><a href="#">Home</a></span>
          </div>

        </div>

      </div>
    );
  }
}


// const mapStateToProps = function(state) {
//   return {
//     layout: state.productsLayout,
//   };
// }
//
// export default connect(mapStateToProps)(ProductsLayout);

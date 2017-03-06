import React from 'react';
import basecss from '../../../css/base.css';
import css from '../../../css/style.css';
import ProductEntry from '../ProductEntry/component';
import {connect} from 'react-redux';
import {loadEntriesNoCategoryFromWithCount} from './actions';

class ProductsLayout extends React.Component {

  static propTypes = {
    layout: React.PropTypes.shape({
      entries: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        imgURL: React.PropTypes.string.isRequired,
        price: React.PropTypes.shape({
          value: React.PropTypes.number.isRequired,
          currencyCodeISO4217: React.PropTypes.string.isRequired}).isRequired,})).isRequired,
      countOnLayout: React.PropTypes.number.isRequired,
      }).isRequired,
    params: React.PropTypes.shape({
      page: React.PropTypes.number }),
  }

  static defaultProps = {
    params: { page: 1 }
  }

  static path = '/page/:page';

  constructor() {
    super();
    Object.freeze(this.constructor.defaultProps);
  }

  componentDidMount() {
    console.log('did mount', this.props.params.page);
    const from = 1 + (this.props.params.page - 1)*this.props.layout.countOnLayout;
    this.props.dispatch(loadEntriesNoCategoryFromWithCount(from, this.props.layout.countOnLayout));
  }

  render() {
console.log('this.props.layout',this.props.layout);
console.log('page',this.props.params.page)
    const entries = this.props.layout.entries;

    if(this.props.layout.failure) {
      console.log(this.props.layout.failure);
    }

    let returnedJSX = (this.props.layout.isLoading) ? <p>Loading...</p> :
        entries &&
        <div className="product-entries"> {
          entries.map((display,i) => <ProductEntry display={display} key={i} />) }
        </div>
        || null;

console.log('returnedJSX', returnedJSX);

    return returnedJSX;
  }
}


const mapStateToProps = function(state) {
  return {
    layout: state.productsLayout,
  };
}

export default connect(mapStateToProps)(ProductsLayout);

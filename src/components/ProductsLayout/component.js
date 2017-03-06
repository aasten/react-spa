import React from 'react';
import basecss from '../../../css/base.css';
import css from '../../../css/style.css';
import ProductEntry from '../ProductEntry/component';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {loadEntriesNoCategoryFromWithCount, setCurrentPageNumberAsync} from './actions';

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
      page: React.PropTypes.number,
      }).isRequired,
  }

  static defaultProps = {
    layout: { page: 1 }
  }

  static path = '/page/:page';

  constructor() {
    super();
    Object.freeze(this.constructor.defaultProps);
    this.loadEntriesRequestActive = false;
  }

  currentPage = () => {
    const {params: {page = 1} } = this.props;
    return parseInt(page);
  }

  refreshPage = (nextPage) => {
    const page = (nextPage) ? nextPage : this.currentPage();
    const from = 1 + (page - 1)*this.props.layout.countOnLayout;
    console.log('refresh page', page);
    if(page != this.props.layout.page) {
      if(!this.loadEntriesRequestActive) {
        this.props.dispatch(loadEntriesNoCategoryFromWithCount(from, this.props.layout.countOnLayout));
        this.loadEntriesRequestActive = true;
      }
      this.props.dispatch(setCurrentPageNumberAsync(page));
    }
  }

  updateEntriesRequestStatus() {
    if(this.loadEntriesRequestActive && !this.props.layout.isLoading) {
      this.loadEntriesRequestActive = false;
    }
  }

  componentWillUpdate() {
    this.updateEntriesRequestStatus();
  }

  componentDidMount() {
    this.refreshPage();
  }

  componentWillReceiveProps(nextProps) {
    this.refreshPage(nextProps.params.page);
  }

  render() {
    const page = this.currentPage();
    console.log('render, page',page);
    const entries = this.props.layout.entries;

    if(this.props.layout.failure) {
      console.log(this.props.layout.failure);
    }

    let entriesJSX = (this.props.layout.isLoading) ? <p>Loading...</p> :
        entries &&
        <div> {
          entries.map((display,i) => <ProductEntry display={display} key={i} />) }
        </div>
        || null;

    const nextPage = page + 1;
    const prevPage = page - 1;
    let linkNextPage = '/page/'+nextPage;
    let linkPrevPage = (page > 1) ? '/page/'+prevPage : '#';

    return (
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

        <div className="product-entries">
          {entriesJSX}
        </div>

        <div className="pagination-bar layout-control-panel background-panel">
          <span className="page-right"><Link to={linkNextPage}>Next Page &raquo;</Link></span>
          <span className="page-left"><Link to={linkPrevPage}>&laquo; Previous Page</Link></span>
          <span><Link to='/'>Home</Link></span>
        </div>

      </div>
    );
  }
}


const mapStateToProps = function(state) {
  return {
    layout: state.productsLayout,
  };
}

export default connect(mapStateToProps)(ProductsLayout);

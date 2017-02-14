import React from 'react';
import {connect} from 'react-redux';
import entrycss from './entry.css';
import css from '../../style.css';
import Modal from 'react-modal';
import MoreInfoModal from './MoreInfoModal';
import {selectEntryAndShowModal} from './actions';

class MoreInfoButton extends React.Component {

  static propTypes = {
    entryId: React.PropTypes.any.isRequired
  }

  render() {

    const details = {name: 'Canon EOS 5D', imgURL: 'img/canon.png', price: 2000, characteristics:[
                            {propName: 'prop name 1', propValue: 'prop value 1'},
                            {propName: 'prop name 2', propValue: 'prop value 2'}]};
    return <button className="more-info action-button"
      onClick={() => this.props.dispatch(selectEntryAndShowModal(this.props.entryId))}>
      More info
        <MoreInfoModal />
    </button>;
  }
}

const mapStateToProps = function(state) {
  return {
    state: state
  };
}

export default connect(mapStateToProps)(MoreInfoButton);

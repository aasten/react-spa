// jshint esversion: 6
import React from 'react';
import entrycss from './entry.css';
import css from '../style.css';
// import Modal from 'react-modal';
import Modal from 'react-awesome-modal';
// import {ModalDialog} from 'react-modal-dialog';
import MoreInfo from './MoreInfo.js'

// const modalStyle = {
//   content: {
//     width: '100%',
//   }
// }

export default class MoreInfoButton extends React.Component {
  state = {
    isShowingModal: false,
  }
  openModal = () => this.setState({isShowingModal: true})
  closeModal = () => this.setState({isShowingModal: false})
  render() {
    return <button className="more-info action-button" onClick={this.openModal}>
      More info
      <Modal
        visible={this.state.isShowingModal}
        onClickAway={() => this.closeModal()} >

        <MoreInfo />

      </Modal>
    </button>;
  }
}

// jshint esversion: 6
import React from 'react';
import entrycss from './entry.css';
import css from '../style.css';
import Modal from 'react-modal';
// import {ModalDialog} from 'react-modal-dialog';
import MoreInfo from './MoreInfo.js'



export default class MoreInfoButton extends React.Component {
  state = {
    isShowingModal: false,
  }


  openModal = () => this.setState({isShowingModal: true})
  closeModal = () => this.setState({isShowingModal: false})
  render() {
    const padding = 10; // adjust this to your needs
    let height = (this.state.contentHeight + padding);
    let heightPx = height + 'px';
    let heightOffset = height / 2;
    let offsetPx = heightOffset + 'px';

    const modalStyle = {
      content: {
        border: '0',
        borderRadius: '4px',
        height: heightPx,  // set height
        padding: '2rem',
        left: '50%',
        transform: 'translate(-50%,-' + offsetPx + ')', // adjust top "up" based on height
        width: '70%',
        maxWidth: '768px'
      }
    };

    return <button className="more-info action-button" onClick={this.openModal}>
      More info
      <Modal
        isOpen={this.state.isShowingModal}
        onRequestClose={this.closeModal}
        contentLabel="Product details"
        shouldCloseOnOverlayClick={true}
         >

        <MoreInfo />

      </Modal>
    </button>;
  }
}

// jshint esversion: 6
import React from 'react';
import entrycss from './entry.css';
import css from '../style.css';
import Modal from 'react-modal';
import MoreInfo from './MoreInfo.js'



export default class MoreInfoButton extends React.Component {

  state = {
    isShowingModal: false,
  }

  openModal = () => this.setState({isShowingModal: true})
  closeModal = () => this.setState({isShowingModal: false})
  render() {

    const modalStyle = {
      overlay : {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
      },
      content : {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        width: '74%',
        height: '80%',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        textAlign: 'center',
      }
    };

    return <button className="more-info action-button" onClick={this.openModal}>
      More info
      <Modal
        isOpen={this.state.isShowingModal}
        onRequestClose={this.closeModal}
        contentLabel="Product details"
        shouldCloseOnOverlayClick={true}
        style={modalStyle}
         >

        <MoreInfo />

      </Modal>
    </button>;
  }
}

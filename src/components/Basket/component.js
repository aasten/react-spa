import React from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import BasketNonModal from './BasketNonModal';
import {closeModal} from './actions';


class BasketModal extends React.Component {
  close = () => {this.props.dispatch(closeModal())};

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
        height: 'inherit',
        transform: 'translate(-50%,-50%)',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        textAlign: 'center',
      }
    };

    return (
      <Modal
        isOpen={this.props.basket.isShowingModal}
        onRequestClose={this.close}
        contentLabel="Basket"
        shouldCloseOnOverlayClick={true}
        style={modalStyle}
         >

        <BasketNonModal positions={this.props.basket.positions}/>

      </Modal>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    basket: state.basket,
  };
}

export default connect(mapStateToProps)(BasketModal);

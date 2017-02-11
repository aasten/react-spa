import React from 'react';
import Modal from 'react-modal';
import MoreInfo from './MoreInfo';
import {closeModal} from './actions';

export default class MoreInfoModal extends React.Component {
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

    return (
      <Modal
        isOpen={this.props.isShowingModal}
        onRequestClose={closeModal}
        contentLabel="Product details"
        shouldCloseOnOverlayClick={true}
        style={modalStyle}
         >

        <MoreInfo />

      </Modal>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    // TODO вопрос, можно ли получать через функцию (задержка и т.п.)
    isShowingModal: state.isShowingModal
  };
}

export default connect(mapStateToProps)(MoreInfoModal);

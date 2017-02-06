// jshint esversion: 6
import React from 'react';
import entrycss from './entry.css';
import css from '../style.css';
import {ModalDialog} from 'react-modal-dialog';
import MoreInfo from './MoreInfo.js'

export default class MoreInfoButton extends React.Component {
  state = {
    isShowingModal: false,
  }
  handleClick = () => this.setState({isShowingModal: true})
  handleClose = () => this.setState({isShowingModal: false})
  render() {
    return <button className="more-info action-button" onClick={this.handleClick}>
      More info
      {
        this.state.isShowingModal &&
        <ModalDialog onClose={this.handleClose}>
          <MoreInfo />
        </ModalDialog>
      }
    </button>;
  }
}

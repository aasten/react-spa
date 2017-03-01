import React, { Component } from 'react';
import HeaderAndFooter from './components/HeaderAndFooter/component';

export default class App extends Component {
  static propTypes = {
    children: React.PropTypes.any.isRequired
  };
  static path = '/';
  render() {
    return (
        <HeaderAndFooter>
          {this.props.children}
        </HeaderAndFooter>
    );
  }
}

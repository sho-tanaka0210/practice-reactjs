import Consts from '../../consts/consts'
import React, { Component } from 'react'
import {
  Button
} from 'semantic-ui-react'

class ViewDetailButton extends Component {

  constructor() {
    super();
    this.state = {isViewDetails: false};
  }

  viewDetail = (detail) => {
    this.setState({ isViewDetails: !this.state.isViewDetails});
  }

  render() {
    let button;

    if(this.state.isViewDetails){
      button = <Button onClick={() => this.viewDetail()}>{Consts.BUTTON_CLOSE}</Button>;
    } else {
      button = <Button onClick={() => this.viewDetail()}>{Consts.BUTTON_READ_MORE}</Button>;
    }

    return(
      button
    );
  }
}

export default ViewDetailButton;

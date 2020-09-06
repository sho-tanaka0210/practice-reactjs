import React, { Component } from 'react'
import ViewDetailButton from '../buttons/viewDetailButton';
import AppEnum from '../../consts/appEnum';
import {
  Responsive,
} from 'semantic-ui-react'

class AppDetail extends Component {
  state = {}

  viewDetail = () => {
    this.setState({ isViewDetails: !this.state.isViewDetails});
  }

  getDetailText = () => {
    return <div>テスト用</div>;
  }

  render() {
    return <ViewDetailButton detail={this.getDetailText()}></ViewDetailButton>;
  }
}

export default AppDetail;

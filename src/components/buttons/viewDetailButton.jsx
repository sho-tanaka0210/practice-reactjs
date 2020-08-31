import Consts from '../../consts/consts'
import React, { Component } from 'react'
import {
  Responsive,
  Button
} from 'semantic-ui-react'

class ViewDetailButton extends Component {

  constructor(props){
    super();
    this.state = {isViewDetails: false};
  }
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
  }
  
  render() {
    const { detail } = this.props;
    const {isViewDetails} = this.state.isViewDetails;
    let view;

    if(isViewDetails){

    } else {
      view = Consts.BUTTON_READ_MORE;
    }

    return(
      <Button onClick={() => this.viewDetail()}>
        {view}
      </Button>
    );
  }
  
  viewDetail = (detail) => {
    console.log('ok')
  }
}

export default ViewDetailButton;

import React, { Component } from 'react'
import {
  Responsive,
} from 'semantic-ui-react'

class Overview extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
  }

  render() {
    const { overview } = this.props

    return(
      <p style={{ fontSize: '1.33em' }}>
        {overview}
      </p>
    );
  }
}

export default Overview;

import React, { Component } from 'react'
import {
  Header,
  Responsive,
} from 'semantic-ui-react'

class Name extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
  }

  render() {
    const { title } = this.props

    return (
      <Header as='h3' style={{ fontSize: '2em' }}>
        {title}
      </Header>
    )
  }
}

export default Name;

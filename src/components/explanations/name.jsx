import React, { Component } from 'react'
import {
  Header,
} from 'semantic-ui-react'

class Name extends Component {
  state = {}

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

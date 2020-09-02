import React, { Component } from 'react'

class Overview extends Component {
  state = {}

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

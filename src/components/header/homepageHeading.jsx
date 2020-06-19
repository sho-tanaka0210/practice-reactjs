import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Container,
  Header,
} from 'semantic-ui-react'

class HomepageHeading extends Component {
  
  render (mobile = this.props.mobile) {
    return <Container text>
    <Header
      as='h1'
      content='リポジトリ概要紹介'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginTop: mobile ? '0em' : '1em',
        marginBottom: '1em',
      }}
      data-testid='header'
    />
  </Container>
  }

}

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default HomepageHeading;

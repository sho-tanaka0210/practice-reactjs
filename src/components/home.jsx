import Consts from '../consts/consts'
import DesktopContainer from './containers/desktopContainer'
import MobileContainer from './containers/mobileContainer'
import Name from './explanations/name'
import Overview from './explanations/overview'
import PropTypes from 'prop-types'
import React from 'react'
import ViewDetailButton from './buttons/viewDetailButton'
import {
  Container,
  Segment,
} from 'semantic-ui-react'

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Name title={Consts.DISCORD_APP_NAME}></Name>
        <Overview overview={Consts.DISCORD_APP_OVERVIEW}></Overview>
        <ViewDetailButton></ViewDetailButton>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout

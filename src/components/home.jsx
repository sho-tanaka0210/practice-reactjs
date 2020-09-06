import Consts from '../consts/consts';
import DesktopContainer from './containers/desktopContainer';
import MobileContainer from './containers/mobileContainer';
import Name from './explanations/name';
import Overview from './explanations/overview';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Container,
  Segment,
} from 'semantic-ui-react';

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
    <Segment style={{ padding: '8em 0em' }} vertical piled>
      <Container>
        <Name title={Consts.DISCORD_APP_NAME}></Name>
        <Overview 
          overview={Consts.DISCORD_APP_OVERVIEW} 
          imageSrc1={Consts.DISCORD_APP_MOTION_CAPUTURE}>
        </Overview>

        <Name title={Consts.CHECK_RESPONSE_NAME}></Name>
        <Overview 
          overview={Consts.CHECK_RESPONSE_OVERVIEW}
          imageSrc1={Consts.CHECK_RESPONSE_OVERVIEW_CAPTURE}>
        </Overview>

        <Name title={Consts.DOCKER_IMAGE_NAME}></Name>
        <Overview
          overview={Consts.DOCKER_IMAGE_OVERVIEW}
          imageSrc1={Consts.DOCKER_IMAGE_WORKING_CAPTURE}>
          </Overview>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout

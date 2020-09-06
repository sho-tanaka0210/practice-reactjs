import React, { Component } from 'react'
import {
  Grid,
  Image,
} from 'semantic-ui-react';


class Overview extends Component {
  state = {}

  render() {
    const { overview } = this.props
    const { imageSrc1 } = this.props;
    const { imageSrc2 } = this.props;

    return(
      <div>
        <p style={{ fontSize: '1.33em' }}>
          {overview}
        </p>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              <Image src={imageSrc1}></Image>
            </Grid.Column>
            <Grid.Column width={10}>
              <Image src={imageSrc2}></Image>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Overview;

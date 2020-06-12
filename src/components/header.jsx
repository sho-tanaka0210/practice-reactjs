import React from 'react';
import { Header } from 'semantic-ui-react'
import './css/header.css'

/**
 * ヘッダー用のコンポーネント
 *
 * @author mizukichi0210
 */
class PageHeader extends React.Component {
  render() {
    return (
      <Header as='h2'
        content='メインヘッダー'
        subheader='サブヘッダー'>
      </Header>
    )
  }
}

export default PageHeader;

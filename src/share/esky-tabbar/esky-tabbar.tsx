import React, { Component } from 'react'
import { AtTabBar } from 'taro-ui'
export default class EskyTabbar extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick(value) {
    this.setState({
      current: value
    })
  }
  render() {
    return (
      <AtTabBar
        tabList={[

          { title: '首页', iconType: 'home' },
          { title: '洗护预约', iconType: 'tags', text: 2 },
          // { title: '商城', iconType: 'shopping-bag-2' },
          { title: '我的', iconType: 'user', text: 3, max: 99 }
        ]}
        onClick={this.handleClick.bind(this)}
        current={this.state.current}
        fixed
      />
    )
  }
}
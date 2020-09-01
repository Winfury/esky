import React, { Component } from 'react'
import { View } from '@tarojs/components'
import EskyTabbar from '../../share/esky-tabbar/esky-tabbar'
import { Swiper, SwiperItem, Image } from '@tarojs/components'
import { AtList, AtListItem, AtAvatar, AtDivider, AtIcon } from "taro-ui"
import cw1 from '../../assets/images/cw-1.jpg'
import cw2 from '../../assets/images/cw-2.jpg'
import cw3 from '../../assets/images/cw-3.jpg'
import card1 from '../../assets/images/card-1.png'
import './index.less'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <View className='user-info at-row'>
          <View className='at-col at-col-2 avatar-box'>
            <AtAvatar circle text='魏源'></AtAvatar>
          </View>
          <View className='at-col at-col-9'>
            <View className='at-article__h3'>
              Winfury
            </View>
            <View className='at-article__info'>
              未预约
            </View>
          </View>
        </View>
        {/* <AtDivider lineColor="#eee">
          <AtIcon value='bell' size="18" color="#aaa"></AtIcon>
        </AtDivider> */}
        <Swiper
          indicatorColor='#999'
          indicatorActiveColor='#333'
          interval={15000}
          circular
          indicatorDots
          autoplay>
          <SwiperItem>
            <View className='demo-text-1'>
              <Image mode="widthFix" src={cw1} />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-2'>
              <Image mode="widthFix" src={cw2} />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-2'>
              <Image mode="widthFix" src={cw3} />
            </View>
          </SwiperItem>
        </Swiper>
        <AtList hasBorder={false}>
          <AtListItem
            title='洗护预约'
            note='点击预约你的宠物洗护'
            arrow='right'
            iconInfo={{ size: 25, color: '#2196f3', value: 'tags', }}
          />
          <AtListItem
            title='天E商城'
            note='购买你的宠物用品'
            arrow='right'
            iconInfo={{ size: 25, color: '#e91e63', value: 'shopping-bag-2', }}
          />
          <AtListItem
            title='领券中心'
            note='获取最新的优惠活动'
            arrow='right'
            iconInfo={{ size: 25, color: '#ff9800', value: 'money', }}
          />
          <AtListItem
            title='萌宠护理'
            note='了解宠物护理的基本知识'
            arrow='right'
            iconInfo={{ size: 25, color: '#009688', value: 'bookmark', }}
          />
        </AtList>
        <EskyTabbar />
      </View >
    )
  }
}

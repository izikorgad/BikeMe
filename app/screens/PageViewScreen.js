import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';
import SwiperScreen from '../components/SwiperScreen';
import { Header } from '../components/common';

export default class PageViewScreen extends Component {
  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <Header headerText='תמונות' />
        <SwiperScreen />
      </View>
    );
  }
}

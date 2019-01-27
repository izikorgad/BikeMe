import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default class SwiperScreen extends Component {
  render() {
    return (
      <Swiper
        style={styles.wrapper}
      >
        <View style={styles.slide1}>
          <Image
            source={require('../../img/todo.png')}
          />
        </View>
        <View style={styles.slide2} />
        <View style={styles.slide3} />
      </Swiper>
    );
  }
}

const styles = {
  wrapper: {
    backgroundColor: '#43f707'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#43f707',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f72702',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0864db',
  }
};

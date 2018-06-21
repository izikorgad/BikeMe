import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';

// import ProfileScreen from '../screens/ProfileScreen';
import LenderScreen from '../screens/LenderScreen';
import PageViewScreen from '../screens/PageViewScreen';
import MapScreen from '../screens/MapScreen';

export const PageViewStack = createStackNavigator({ // This contains both the Tabs
  PageViewScreen: {
    screen: PageViewScreen
  }
}, {
  headerMode: 'none'
});

export const Tabs = createBottomTabNavigator({
//   ProfileScreen: {
//     screen: ProfileScreen,
//     navigationOptions: {
//       title: 'Profile',
//       tabBarLabel: 'Profile',
//       tabBarIcon: ({ tintColor }) => (
//         <Image
//           source={require('../../img/profile.png')}
//           style={[styles.icon, { tintColor }]}
//         />
//       ),
//     },
//   },
LenderScreen: {
    screen: LenderScreen,
    navigationOptions: {
      title: 'השאלה',
      tabBarLabel: 'השאלה',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../../img/todo.png')}
          style={[styles.icon, { tintColor }]}
        />
      ),
    },
  },
  PageViewStack: {
    screen: PageViewStack,
    navigationOptions: {
      title: 'Page View',
      tabBarLabel: 'Page View',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../../img/scene.png')}
          style={[styles.icon, { tintColor }]}
        />
      ),
    },
  },
  MapScreen: {
    screen: MapScreen,
    navigationOptions: {
      title: 'Maps',
      tabBarLabel: 'Maps',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../../img/map.png')}
          style={[styles.icon, { tintColor }]}
        />
      ),
    },
  },
});

const styles = {
  icon: {
    width: 26,
    height: 26,
  },
};

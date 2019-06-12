import React, {Component} from 'react';
import {createStackNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator} from 'react-navigation';
import {StyleSheet, Text, View, Image} from 'react-native';
import HomeScreen from './src/home';
import UsersScreen from './src/users';
import SettingsScreen from './src/settings';
import LogoTitle from './src/logo';
import SideMenu from './src/sidedrawer';
import Icon from './src/images/animal-track.png';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Users: UsersScreen
});

const OtherStack = createStackNavigator({
  Settings: SettingsScreen,
  Users: UsersScreen
});

// const AppNavigator = createBottomTabNavigator({
//   Home: HomeStack,
//   Settings: OtherStack
// })

const AppNavigator = createDrawerNavigator({
  Home: HomeStack,
  Settings: OtherStack
})

// const AppNavigator = createBottomTabNavigator({
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: ({navigation}) => ({
//       tabBarIcon: ({focused, horizontal, tintColor}) => {
//         const {routeName} = navigation.state;

//         return <Image
//           source={Icon}
//           style={{width: 30, height: 30}}
//         />
//       }
//     })
//   },
//   Users: {
//     screen: UsersScreen
//   }
// }, {
//   initialRouteName: 'Home',
//   order: ['Users', 'Home'],
//   tabBarOptions: {
//     style: {
//       backgroundColor: '#24b1f2',
//     },
//     labelStyle: {
//       fontSize: 20
//     }
//   },
//   defaultNavigationOptions: ({navigation}) => ({
//     tabBarOnPress: ({defaultHandler}) => {
//       if (navigation.state.key === "Users") {
//         navigation.navigate('Users');
//       } else {
//         defaultHandler();
//       }
//     }
//   })
// })

// const AppNavigator = createDrawerNavigator({
//   Home: {
//     screen: HomeScreen,
//     // navigationOptions: ({navigation}) => ({
//     //   drawerLabel: "Super"
//     // })
//   },
//   Users: {
//     screen: UsersScreen
//   }
// }, {
//   contentComponent: SideMenu,
//   drawerWidth:250,
//   drawerBackgroundColor: '#24b1f2',
//   drawerType: 'front',
//   contentOptions: {
//     activeBackgroundColor: "white",
//     activeTintColor: "#24b1f2",
//     inactiveTintColor: "white"
//   }
// })

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: ({navigation}) => ({
//       title: "Home",
//       headerTitle: LogoTitle,
//       headerBackTitle: 'clown'
//     })
//   },
//   Users: {
//     screen: UsersScreen
//   }
// }, {
//   initialRouteName: 'Home',
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: '#24b1f2'
//     },
//     headerTintColor: 'white',
//     headerTitleStyle: {
//       fontWeight: 'bold',
//       flex: 1,
//       textAlign: 'center'
//     }
//   },
//   mode: 'card',
//   headerMode: 'float'
// })

export default createAppContainer(AppNavigator);
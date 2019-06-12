import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import Logo from './images/animal-track.png';
import {NavigationActions} from 'react-navigation';

class SideMenu extends Component {

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });

    this.props.navigation.dispatch(navigateAction)
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.navImageContainer}>
              <Image
                source={Logo}
                style={{
                  width: 50,
                  height: 50
                }}
              />
            </View>
            <Text style={styles.sectionHeadingStyle}>
              Section 1
            </Text>
            <View style={styles.navSectionStyle}>
              <Text 
                style={styles.navItemStyle}
                onPress={this.navigateToScreen("Home")}
              >
                Home
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text 
                style={styles.navItemStyle}
                onPress={this.navigateToScreen("Users")}
              >
                Users
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text 
                style={styles.navItemStyle}
                onPress={this.navigateToScreen("Home")}
              >
                Users
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text 
                style={styles.navItemStyle}
                onPress={this.navigateToScreen("Home")}
              >
                Users
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>Copyright</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },

  navImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50
  },

  sectionHeadingStyle: {
    color: "#24b1f2",
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10
  },

  navSectionStyle: {
    backgroundColor: '#2e2e2e'
  },

  navItemStyle: {
    padding: 10,
    color: "#fff"
  },

  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey'
  }
});

export default SideMenu;
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import Logo from './images/animal-track.png';

class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Notifications",
    drawerIcon: () => (
      <Image
        source={Logo}
        style={{width: 30, height: 30}}
      />
    )
  }
  // static navigationOptions = ({navigation}) => {
  //   return {
  //     headerLeft: (
  //       <Button
  //         title={"B"}
  //         onPress={() => {
  //           navigation.navigate("Users");
  //         }}
  //       />
  //     ),
  //     headerRight: (
  //       <Button
  //         title={"R"}
  //         onPress={() => {
  //           navigation.navigate("Users");
  //         }}
  //       />
  //     )
    // }
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen!</Text>
        <Button
          title={"Go to Users"}
          onPress={
            () => {
              this.props.navigation.navigate('Users', {
                userName: "Mitch",
                userLastName: "Fischer"
              });
            }
          }
        />
        <Text>{this.props.navigation.getParam('message', '')}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});

export default HomeScreen;
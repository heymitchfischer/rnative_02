import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

class UsersScreen extends Component {
  static navigationOptions = {
    title:'Users',
  }

  render() {

    const userId = this.props.navigation.getParam('userId', 'N/A');
    const userName = this.props.navigation.getParam('userName');
    const userLastName = this.props.navigation.getParam('userLastName');

    return (
      <View style={styles.container}>
        <Text>Users Screen!</Text>
        <Text>User ID: {userId}</Text>
        <Text>User: {userName} {userLastName}</Text>
        <Button
          title={"Open Side Drawer"}
          onPress={() => {
            this.props.navigation.toggleDrawer();
          }}
        />
        <Button
          title={"Go to Home"}
          onPress={
            () => {
              this.props.navigation.navigate('Home', {
                message: "Hello friends!"
              });
            }
          }
        />
        <Button
          title={"Go Back"}
          onPress={
            () => {
              this.props.navigation.goBack();
            }
          }
        />
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

export default UsersScreen;
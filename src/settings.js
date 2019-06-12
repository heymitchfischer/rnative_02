import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import Logo from './images/animal-track.png';

class SettingsComponent extends Component {
  render() {
    return (
      <View>
        <Text>Settings Screen</Text>
        <Button 
          title={"Go to Users"}
          onPress={() => {
            this.props.navigation.navigate('Users', {
              userName: "Mitch",
              userLastName: "Fischer"
            });
          }}
        />
      </View>
    )
  }
}

export default SettingsComponent;
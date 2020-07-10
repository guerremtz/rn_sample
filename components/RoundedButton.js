import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableHighlight, ImagePropTypes } from 'react-native';


const RoundedButton = props => {
  return (
    <TouchableHighlight onPress={props.press}>
      <View style={styles.button}>
        <Text style={styles.text}>CONFIRM</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#702bc4",
    width: Dimensions.get('window').width * .70,
    height: 50,
    borderRadius: 25
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default RoundedButton;
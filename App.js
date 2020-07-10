import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';

import CustomTimePicker from './components/CustomTimePicker';
import RoundedButton from './components/RoundedButton';

const height = Dimensions.get('window').height;

export default function App() {
  const [time, setTime] = useState({ hour: 0, min: 0, sec: 0 });

  const changeHandler = newTime => setTime(newTime);

  return (
    <View style={styles.main}>
      <View style={styles.spacer}>
      </View>
      <View style={styles.picker}>
        <CustomTimePicker time={time} change={changeHandler} itemStyle={styles.itemStyle} />
      </View>
      <View style={styles.buttonContainer}>
        <RoundedButton press={() => console.log(time)} />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#000000',
    height: height
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center'
  },
  spacer: {
    height: height * .15
  },
  itemStyle: {
    color: 'white'
  },
  picker: {
    margin: 20
  }
});

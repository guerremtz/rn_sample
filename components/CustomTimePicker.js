import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';

import CustomPicker from './CustomPicker';

const CustomTimePicker = props => {
  const hour = props.time.hour || 0;
  const min = props.time.min || 0;
  const sec = props.time.sec || 0;

  const onItemChange = (itemType, value) => {
    const newState = { ...props.time };
    if (itemType === "hr") {
      newState.hour = value;
    }
    if (itemType === "min") {
      newState.min = value;
    }
    if (itemType === "sec") {
      newState.sec = value;
    }

    props.change(newState);
  }

  return (
    <View style={styles.customPicker}>
      <CustomPicker itemStyle={props.itemStyle} value={hour} max={24} type="hr" change={onItemChange} />
      <CustomPicker itemStyle={props.itemStyle} value={min} max={60} type="min" change={onItemChange} />
      <CustomPicker itemStyle={props.itemStyle} value={sec} max={60} type="sec" change={onItemChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  customPicker: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 200
  }
});

export default CustomTimePicker;


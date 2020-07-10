import React from 'react';
import { Picker } from '@react-native-community/picker';

const CustomPicker = props => {
  const arrayHours = [];
  for (let i = 0; i <= props.max; i++) {
    arrayHours.push(<Picker.Item key={props.type + i} label={props.value === i ? (i + " " + props.type) : (i + "")} value={i} />);
  }

  return (
    <Picker
      selectedValue={props.value}
      itemStyle={props.itemStyle}
      style={{ height: 50, width: 100 }}
      onValueChange={itemValue =>
        props.change(props.type, itemValue)
      } >
      {arrayHours}
    </Picker>
  );
}

export default CustomPicker;


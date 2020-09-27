import React from 'react';
import {View, Text, TextInput} from 'react-native';

const ListDelivery = () => {
  const [value, setValue] = React.useState('');

  const onChange = (event) => setValue(event.target.value);

  return (
    <View>
      <Text>This screen will show a list of pending requests</Text>

      <TextInput value={value} onChange={onChange} />

      <Text>{value}</Text>
    </View>
  );
};

export default ListDelivery;

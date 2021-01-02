import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Share = ({navigation, route}) => {
  return (
    <View style={styles.view}>
      <Text>{route.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'blue',
    flex: 1,
  },
});

export default Share;

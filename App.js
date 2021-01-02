import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import MyStack from './src/navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <MyStack />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
});

export default App;

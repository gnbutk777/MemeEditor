import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import routes from './routesConfig';

const EditMeme = ({navigation, route}) => {
  const {navigate} = navigation;
  const photo = route.params.photo.uri;

  const navigateToEditMeme = () => {
    navigate(routes.share.name);
  };

  return (
    <View style={styles.view}>
      <Text>{route.name}</Text>
      <TouchableOpacity
        onPress={navigateToEditMeme}
        style={{width: 100, height: 100, backgroundColor: 'green'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'blue',
    flex: 1,
  },
});

export default EditMeme;

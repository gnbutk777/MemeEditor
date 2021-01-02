import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

const MiniPhoto = ({photo, navToEditMeme}) => {
  const onPress = () => {
    navToEditMeme(photo.node.image);
  };

  return (
    <TouchableOpacity style={styles.touchableOpacity} onPress={onPress}>
      <Image style={styles.image} source={{uri: photo.node.image.uri}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    flex: 0.5,
    margin: 3,
    height: 130,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default MiniPhoto;

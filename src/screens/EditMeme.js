import React, {useRef, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import ViewShot from 'react-native-view-shot';
import BottomSheet from '../components/BottomSheet';
import routes from './routesConfig';

const EditMeme = ({navigation, route}) => {
  const [draggableElments, setdraggableElments] = useState([]);
  const {navigate} = navigation;
  const viewShotRef = useRef();
  const photo = route.params.photo.uri;

  const navigateToEditMeme = () => {
    navigate(routes.share.name);
  };

  const onCapture = (uri) => {};

  const addDraggableItem = (item) => {
    setdraggableElments((items) => [...items, item]);
  };

  return (
    <View style={styles.view}>
      <ViewShot onCapture={onCapture} ref={viewShotRef} style={styles.viewShot}>
        <Image style={styles.image} source={{uri: photo}} />
        {draggableElments.map((draggableElment) => draggableElment)}
      </ViewShot>
      <BottomSheet addDraggableItem={addDraggableItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  viewShot: {
    flex: 1,
    margin: 10,
    marginBottom: 40,
  },
  image: {
    flex: 1,
  },
});

export default EditMeme;

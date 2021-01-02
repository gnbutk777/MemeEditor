import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {routes} from '../screens';
import MiniPhoto from './MiniPhoto';

const PhotosList = ({photos, navigation}) => {
  const navToEditMeme = (photo) => {
    navigation.navigate(routes.editMeme.name, {photo});
  };

  return (
    <FlatList
      style={styles.flatList}
      numColumns={2}
      data={photos}
      keyExtractor={(item) => item.node.timestamp}
      columnWrapperStyle={styles.columnWrapper}
      renderItem={({item}) => (
        <MiniPhoto navToEditMeme={navToEditMeme} photo={item} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
  columnWrapper: {
    alignItems: 'flex-start',
  },
});

export default PhotosList;

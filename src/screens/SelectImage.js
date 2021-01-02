import React from 'react';
import PhotosList from '../components/PhotosList';
import useSelectImage from '../hooks/useSelectImage';

const SelectImage = ({navigation}) => {
  const {photos} = useSelectImage();

  return <PhotosList navigation={navigation} photos={photos} />;
};

export default SelectImage;

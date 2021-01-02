import {useState, useEffect} from 'react';
// import {PermissionsAndroid, Platform} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

const useSelectImage = (page) => {
  const [photos, setPhotos] = useState([]);
  //   const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const {edges} = await CameraRoll.getPhotos({
          assetType: 'Photos',
          first: 10,
        });
        // const {has_next_page, end_cursor, start_cursor} = page_info;
        edges.length = 5;
        setPhotos(edges);
      } catch (err) {
        // handle error
        console.log('err = ', err);
      }
    };
    getPhotos();
  }, []);

  return {photos};
};

export default useSelectImage;

import React, {useState} from 'react';
import {
  Modal,
  Animated,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {width, height} from '../constants';
import useSlideAnim from '../hooks/useSlideAnim';
import DraggableText from './DraggableText';

const SLIDE_HEIGHT = 200;

const BottomSheet = ({addDraggableItem}) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const insets = useSafeAreaInsets();
  const {value: slideAnim, slideIn, slideOut} = useSlideAnim({
    fromValue: -SLIDE_HEIGHT + insets.bottom * 2,
    toValue: insets.bottom,
  });

  const toggleDrawer = () => {
    if (isShowModal) {
      closeBottomSheet();
    } else {
      openBottomSheet();
    }
  };

  const openBottomSheet = () => {
    console.log('open');
    slideIn();
    setIsShowModal(true);
  };
  const closeBottomSheet = () => {
    console.log('sss');
    slideOut();
    setTimeout(setIsShowModal, 100, false);
  };

  const onPressAddText = () => {
    addDraggableItem(<DraggableText />);
  };

  const Drawer = () => (
    <TouchableOpacity style={styles.drawer} onPress={toggleDrawer}>
      <View />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {!isShowModal && <Drawer />}
      <Modal
        animationType="fade"
        visible={isShowModal}
        transparent
        style={styles.modal}>
        <View style={styles.view}>
          <TouchableOpacity
            style={styles.closeContaier}
            onPress={closeBottomSheet}
          />
          <Animated.View style={[styles.fullDrawer, {bottom: slideAnim}]}>
            <Drawer />
            <View style={styles.optionsView}>
              <TouchableOpacity onPress={onPressAddText} style={styles.option}>
                <Text>Add Text</Text>
              </TouchableOpacity>
              <TouchableOpacity disabled style={styles.optionDisable}>
                <Text>Add Emoji</Text>
              </TouchableOpacity>
              <TouchableOpacity disabled style={styles.optionDisable}>
                <Text>Add Else</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  container: {
    height: 40,
  },
  view: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  drawer: {
    backgroundColor: 'green',
    height: 40,
    width,
    zIndex: 1,
  },
  closeContaier: {
    width,
    height,
    position: 'absolute',
    backgroundColor: '#000C',
  },
  fullDrawer: {
    height: SLIDE_HEIGHT,
    position: 'absolute',
  },
  optionsView: {
    flexDirection: 'row',
  },
  option: {
    margin: 10,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  get optionDisable() {
    return {
      ...this.option,
      opacity: 0.5,
    };
  },
  image: {
    flex: 1,
  },
});

export default BottomSheet;

import {useRef} from 'react';
import {Animated} from 'react-native';

const useSlideAnim = ({fromValue, toValue}) => {
  const value = useRef(new Animated.Value(fromValue));

  const slideIn = () => {
    Animated.timing(value.current, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const slideOut = () => {
    Animated.timing(value.current, {
      toValue: fromValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };
  return {slideIn, slideOut, value: value.current};
};

export default useSlideAnim;

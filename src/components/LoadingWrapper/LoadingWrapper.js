import {Alert} from 'react-native';

import Lottie from 'lottie-react-native';

function LoadingWrapper(props) {
  const {children, isLoading, error} = props;

  if (isLoading)
    return <Lottie source={require('./loadingAnimation.json')} autoPlay />;

  if (error) Alert.alert('Error', 'Hello');

  return children;
}

export default LoadingWrapper;

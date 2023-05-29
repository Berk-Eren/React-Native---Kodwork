import {Alert} from 'react-native';

import Lottie from 'lottie-react-native';

function LoadingWrapper(props) {
  const {children, isLoading, error} = props;

  console.log(error);

  if (isLoading)
    return <Lottie source={require('./loadingAnimation.json')} autoPlay />;

  if (error) Alert.alert(error.name, error.message);

  return children;
}

export default LoadingWrapper;

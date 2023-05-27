import {View, useWindowDimensions} from 'react-native';

import RenderHtml from 'react-native-render-html';

import styles from './Detail.styles';

function Detail(props) {
  const {content} = props;
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <RenderHtml source={{html: content}} contentWidth={width} />
    </View>
  );
}

export default Detail;

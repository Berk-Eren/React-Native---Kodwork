import {View} from 'react-native';
import {StyleSheet} from 'react-native';

import {HeaderBackButton} from '@react-navigation/elements';
import {DrawerToggleButton} from '@react-navigation/drawer';

import {useNavigationState} from '@react-navigation/native';

function HeaderBack(props) {
  console.log(props.navigation.canGoBack());
  console.log(props.navigation);

  const state = useNavigationState(state => state);
  console.log(state);

  return (
    <View style={styles.container}>
      <DrawerToggleButton />
      <HeaderBackButton onPress={() => props.navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default HeaderBack;

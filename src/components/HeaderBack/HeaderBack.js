import {View} from 'react-native';
import {StyleSheet} from 'react-native';

import {HeaderBackButton} from '@react-navigation/elements';
import {DrawerToggleButton} from '@react-navigation/drawer';

import {useNavigationState, useNavigation} from '@react-navigation/native';

function HeaderBack(props) {
  const {navigation} = props;

  const state = JSON.stringify(
    useNavigationState(state => state),
    null,
    2,
  );

  const nav = useNavigation();

  console.log(JSON.stringify(props.nav.getState(), null, 2));
  console.log('-----------');
  console.log(state);
  console.log('sds');
  console.log(JSON.stringify(nav.getState(), null, 2));
  console.log(navigation.canGoBack());
  console.log(nav.canGoBack());

  console.log(navigation.getId);
  console.log(nav.getId());

  return (
    <View style={styles.container}>
      <DrawerToggleButton />
      {navigation.canGoBack() && (
        <HeaderBackButton onPress={() => navigation.goBack()} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default HeaderBack;

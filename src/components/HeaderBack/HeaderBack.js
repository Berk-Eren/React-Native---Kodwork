import {View, TouchableHighlight} from 'react-native';
import {StyleSheet} from 'react-native';

import {DrawerToggleButton} from '@react-navigation/drawer';

import {useNavigationState, useNavigation} from '@react-navigation/native';

import AntDesignIcon from 'react-native-vector-icons/dist/AntDesign';

function HeaderBack(props) {
  const {routerNames} = props;

  const navigation = useNavigation();
  const state = useNavigationState(state => state);

  const indexes = routerNames.reduce((r, n) => {
    r.push(state.routeNames.indexOf(n));
    return r;
  }, []);

  const stateIndex = state.index;
  const subState = state.routes[stateIndex].state;

  return (
    <View style={styles.container}>
      <DrawerToggleButton />
      {indexes.includes(stateIndex) && subState?.index > 0 && (
        <TouchableHighlight
          underlayColor="white"
          onPress={() =>
            navigation.navigate(state.routes[stateIndex].name, {
              screen: subState.routeNames[subState.index - 1],
            })
          }>
          <AntDesignIcon name="left" size={23} color="black" />
        </TouchableHighlight>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default HeaderBack;

import {createDrawerNavigator} from '@react-navigation/drawer';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import {Favourites} from '../pages/index';
import JobsAndDetails from './JobsAndDetails';

import {navigationRef, goBack} from './RootNavigation';

import HeaderBack from '../components/HeaderBack';

const Drawer = createDrawerNavigator();

function JobsAndFavourites() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Drawer.Screen
        name="Jobs"
        component={JobsAndDetails}
        options={({navigation, route}) => ({
          headerTitle: getFocusedRouteNameFromRoute(route),
          headerLeft: () => {
            return <HeaderBack navigation={navigationRef} nav={navigation} />;
          },
        })}
      />
      <Drawer.Screen name="Favourites" component={Favourites} />
    </Drawer.Navigator>
  );
}

export default JobsAndFavourites;

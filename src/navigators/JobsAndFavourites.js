import {createDrawerNavigator} from '@react-navigation/drawer';

import {Favourites} from '../pages/index';
import JobsAndDetails from './JobsAndDetails';

const Drawer = createDrawerNavigator();

function JobsAndFavourites() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Jobs" component={JobsAndDetails} />
      <Drawer.Screen name="Favourites" component={Favourites} />
    </Drawer.Navigator>
  );
}

export default JobsAndFavourites;

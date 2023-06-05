import {createStackNavigator} from '@react-navigation/stack';

import {Jobs, JobDetail} from '../pages/index';

const Stack = createStackNavigator();

function JobsAndDetails() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        initialRouteName: 'JobList',
        headerShown: false,
      }}>
      <Stack.Screen
        name="JobList"
        component={Jobs}
        options={({navigation}) => {
          navigation.getParent().setOptions({title: 'Jobs'});
        }} // TODO
      />
      <Stack.Screen
        name="JobDetail"
        component={JobDetail}
        options={({navigation, route}) => {
          navigation.getParent().setOptions({title: route.params.title});
        }}
      />
    </Stack.Navigator>
  );
}

export default JobsAndDetails;

import {createStackNavigator} from '@react-navigation/stack';

import {Jobs, JobDetail} from '../pages/index';

const Stack = createStackNavigator();

function JobsAndDetails() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        initialRouteName: 'JobList',
      }}>
      <Stack.Screen
        name="JobList"
        component={Jobs}
        options={{headerTitle: 'Jobs'}} // TODO
      />
      <Stack.Screen
        name="JobDetail"
        component={JobDetail}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  );
}

export default JobsAndDetails;

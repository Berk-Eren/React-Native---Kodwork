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
      <Stack.Screen name="JobList" component={Jobs} options={{title: 'Jobs'}} />
      <Stack.Screen
        name="JobDetail"
        component={JobDetail}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  );
} // ({headerTitle: route.params.title})

export default JobsAndDetails;

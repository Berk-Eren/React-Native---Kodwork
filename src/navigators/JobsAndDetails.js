import {createStackNavigator} from '@react-navigation/stack';

import {Jobs, JobDetail} from '../pages/index';

const Stack = createStackNavigator();

function JobsAndDetails() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Jobs" component={Jobs} />
      <Stack.Screen name="JobDetail" component={JobDetail} />
    </Stack.Navigator>
  );
}

export default JobsAndDetails;

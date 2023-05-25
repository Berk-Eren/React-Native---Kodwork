import {View, Text, Button} from 'react-native';

function Jobs({navigation}) {
  return (
    <View>
      <Text>Jobs</Text>
      <Button
        title="Tıkla"
        onPress={() =>
          navigation.navigate('JobDetail', {
            id: undefined,
            title: 'Geçici',
          })
        }
      />
    </View>
  );
}

export default Jobs;

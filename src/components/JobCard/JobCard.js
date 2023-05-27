import {View, Text, TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './JobCard.styles';

function JobCard(props) {
  const navigation = useNavigation();

  function navigateToJob(jobId) {
    navigation.navigate('JobDetail', {title: 'Hello', jobId: jobId}); // TODO
  }
  // TODO Flex yapısını uygula
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => navigateToJob(props.jobId)}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.company}>{props.company}</Text>
        <View style={styles.cityContainer}>
          <Text style={styles.city}>{props.city}</Text>
        </View>
        <Text style={styles.level}>{props.level}</Text>
      </View>
    </TouchableHighlight>
  );
}

export default JobCard;

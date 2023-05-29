import {View, Text, TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './JobCard.styles';

function JobCard(props) {
  const {jobId, title, company, city, level} = props;

  const navigation = useNavigation();

  function navigateToJob(jobId) {
    navigation.navigate('JobDetail', {title: 'Hello', jobId: jobId}); // TODO
  }
  // TODO Flex yapısını uygula
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => navigateToJob(jobId)}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.company}>{company}</Text>
        <View style={styles.cityContainer}>
          <Text style={styles.city}>{city}</Text>
        </View>
        <Text style={styles.level}>{level}</Text>
      </View>
    </TouchableHighlight>
  );
}

export default JobCard;

import {View, Text, TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './JobCard.styles';

function JobCard(props) {
  const navigation = useNavigation();
  const {jobId, title, company, city, level} = props;

  function navigateToJob(jobId) {
    navigation.navigate('JobDetail', {title: 'Hello', jobId: jobId}); // TODO
  }
  // TODO Flex yapısını uygula
  return (
    <TouchableHighlight onPress={() => navigateToJob(jobId)}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.companyContainer}>
          <Text style={styles.company}>{company}</Text>
        </View>
        <View style={styles.cityContainer}>
          <Text style={styles.city}>{city}</Text>
        </View>
        <View style={styles.levelContainer}>
          <Text style={styles.level}>{level}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default JobCard;

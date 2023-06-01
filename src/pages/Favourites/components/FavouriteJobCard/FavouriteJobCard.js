import {removeJob} from '../../../../context/slicer';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {View, TouchableHighlight, Text, TouchableOpacity} from 'react-native';

import styles from './FavouriteJobCard.styles';

function FavouriteJobCard(props) {
  const {jobId, title, company, city, level} = props;

  const dispatch = useDispatch();
  const navigation = useNavigation();

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
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text
              style={styles.buttonText}
              onPress={() => dispatch(removeJob({id: jobId}))}>
              Remove
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default FavouriteJobCard;

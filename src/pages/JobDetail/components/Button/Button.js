import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity, View, Text} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import OcticonsIcon from 'react-native-vector-icons/dist/Octicons';

import styles from './Button.styles';
import {addJob, removeJob} from '../../../../context/slicer';

function Button(props) {
  const {jobId, jobTitle, jobCompany, jobCity, jobLevel} = props;

  const dispatch = useDispatch();
  const favouriteJobs = useSelector(state => state.favouriteJobs);

  console.log(favouriteJobs);

  const [isFavourite, setIsFavourite] = useState(
    favouriteJobs.find(item => item.id == jobId),
  );
  console.log('Job id ', jobId);
  const updateFavouriteStatus = () => {
    if (isFavourite) {
      dispatch(removeJob({id: jobId}));
      setIsFavourite(false);
    } else {
      dispatch(addJob(jobId, jobTitle, jobCompany, jobCity, jobLevel));
      setIsFavourite(true);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <MaterialIcon name="exit-to-app" size={30} color="white" />
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={updateFavouriteStatus}>
        <OcticonsIcon
          name={isFavourite ? 'heart' : 'heart-fill'}
          size={26}
          color="white"
        />
        <Text style={styles.text}>
          {(isFavourite ? 'Unf' : 'F') + 'avourite Job'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Button;

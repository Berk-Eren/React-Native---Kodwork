import styles from './Button.styles';
import {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import OcticonsIcon from 'react-native-vector-icons/dist/Octicons';

function Button() {
  const [isFavourite, setIsFavourite] = useState(true);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <MaterialIcon name="exit-to-app" size={30} color="white" />
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
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

import {View, Text} from 'react-native';

import styles from './Header.styles';

function Header(props) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={[styles.title, styles.titleStyle]}>{props.name}</Text>
        <View style={styles.table}>
          <Text style={[styles.key, styles.tableFontSize]}>Locations: </Text>
          <Text style={[styles.value, styles.tableFontSize]}>
            {props.location}
          </Text>
        </View>
        <View style={styles.table}>
          <Text style={[styles.key, styles.tableFontSize]}>Job Level: </Text>
          <Text style={[styles.value, styles.tableFontSize]}>
            {props.level}
          </Text>
        </View>
      </View>
      <Text style={[styles.detail, styles.titleStyle]}>Job Detail</Text>
    </View>
  );
}

export default Header;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {backgroundColor: 'white'},
  topContainer: {paddingLeft: 8},
  title: {
    fontSize: 30,
  },
  detail: {fontSize: 25, margin: 10, alignSelf: 'center'},
  titleStyle: {fontWeight: 'bold'},
  table: {
    flexDirection: 'row',
  },
  tableFontSize: {
    fontSize: 17,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  key: {
    color: 'red',
  },
  value: {
    color: 'black',
  },
});

export default styles;

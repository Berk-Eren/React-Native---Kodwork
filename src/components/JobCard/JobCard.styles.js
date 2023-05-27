import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 5,
    margin: 10,
    padding: 8,
    paddingRight: 12,
    paddingBottom: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  company: {
    fontSize: 15,
  },
  cityContainer: {
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: 'red',
    borderRadius: 25,
    marginTop: 7,
    alignSelf: 'flex-start',
  },
  city: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  level: {
    marginTop: 2,
    textAlign: 'right',
    color: 'red',
    fontSize: 15,
  },
});

export default styles;

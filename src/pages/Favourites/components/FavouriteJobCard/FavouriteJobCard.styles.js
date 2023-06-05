import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 3.8,
    margin: 10,
    padding: 8,
    paddingRight: 12,
    paddingBottom: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  titleContainer: {
    minHeight: '33%',
  },
  companyContainer: {paddingTop: 2},
  cityContainer: {
    justifyContent: 'center',
    padding: 5,
    backgroundColor: 'red',
    borderRadius: 25,
    alignSelf: 'flex-start',
  },
  levelContainer: {marginTop: 0},
  buttonContainer: {
    justifyContent: 'center',
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: 'red',
    paddingVertical: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 1,
  },
  company: {
    fontSize: 15,
  },
  city: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  level: {
    textAlign: 'right',
    color: 'red',
    fontSize: 15,
    verticalAlign: 'top',
    textTransform: 'capitalize',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;

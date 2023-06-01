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
  titleContainer: {
    flex: 2,
  },
  companyContainer: {flex: 1},
  cityContainer: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'red',
    borderRadius: 25,
    alignSelf: 'flex-start',
  },
  levelContainer: {flex: 1},
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  company: {
    fontSize: 15,
  },
  city: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    textAlignVertical: 'center',
  },
  level: {
    textAlign: 'right',
    color: 'red',
    fontSize: 15,
    verticalAlign: 'top',
    textTransform: 'capitalize',
  },
});

export default styles;

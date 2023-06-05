import {View, Text, FlatList, Image} from 'react-native';
import {useSelector} from 'react-redux';

import FavouriteJobCard from './components/FavouriteJobCard';

function Favourites() {
  const favouriteJobs = useSelector(selector => selector.favouriteJobs);

  return (
    <>
      {favouriteJobs.length > 0 ? (
        <View
          style={{
            backgroundColor: '#e4dcdc',
            flex: 1,
          }}>
          <FlatList
            data={favouriteJobs}
            renderItem={({item}) => (
              <FavouriteJobCard
                jobId={item.id}
                title={item.title}
                company={item.company}
                city={item.city}
                level={item.level}
              />
            )}
          />
        </View>
      ) : (
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 100,
              height: 100,
              alignSelf: 'center',
            }}
            source={{
              uri: 'https://simpleicon.com/wp-content/uploads/basket.png',
            }}
          />
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            No jobs are saved
          </Text>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>
            Add some jobs to your favourite list
          </Text>
        </View>
      )}
    </>
  );
}

export default Favourites;

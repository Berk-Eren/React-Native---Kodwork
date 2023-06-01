import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import FavouriteJobCard from './components/FavouriteJobCard';

function Favourites() {
  const favouriteJobs = useSelector(selector => selector.favouriteJobs);

  return (
    <View>
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
  );
}

export default Favourites;

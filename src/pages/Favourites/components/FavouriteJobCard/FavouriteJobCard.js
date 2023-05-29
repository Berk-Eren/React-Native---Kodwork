import {useSelector} from 'react-redux';

import {View, Button, FlatList, StyleSheet} from 'react-native';

import JobCard from '../../../../components/JobCard';

function FavouriteJobCard() {
  const favouriteJobs = useSelector(state => state.favouriteJobs);

  return (
    <View>
      <FlatList
        data={Object.keys(favouriteJobs)}
        renderItem={({item}) => (
          <JobCard
            jobId={item}
            title={favouriteJobs[item][title]}
            company={favouriteJobs[item][company]}
            city={favouriteJobs[item][city]}
            level={favouriteJobs[item][level]}
          />
        )}
      />

      <Button />
    </View>
  );
}

export default FavouriteJobCard;

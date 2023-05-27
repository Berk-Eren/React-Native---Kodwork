import {View, Text, Button, FlatList} from 'react-native';

import JobCard from '../../components/JobCard';

import LoadingWrapper from '../../components/LoadingWrapper/LoadingWrapper';

import {useFetch} from '../../hooks';

function Jobs({navigation}) {
  const [data, isLoading, error] = useFetch('api/public/jobs', {
    params: {page: 1},
  });

  return (
    <LoadingWrapper isLoading={isLoading} error={error}>
      <View>
        <FlatList
          data={data.results}
          renderItem={({item}) => {
            return (
              <JobCard
                jobId={item.id}
                title={item.name}
                company={item.company.name}
                city={item.locations[0].name}
                level={item.levels[0].name}
              />
            );
          }}
          keyExtractor={item => item.id}
        />
        <Button
          title="Tıkla"
          onPress={() =>
            navigation.navigate('JobDetail', {
              id: undefined,
              title: 'Geçici',
            })
          }
        />
      </View>
    </LoadingWrapper>
  );
}

export default Jobs;

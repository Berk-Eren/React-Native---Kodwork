import {View, ScrollView} from 'react-native';

import {Header, Detail, Button} from './components';
import LoadingWrapper from '../../components/LoadingWrapper/LoadingWrapper';

import {useFetch} from '../../hooks';

function JobDetail({route}) {
  const [data, isLoading, error] = useFetch(
    `api/public/jobs/${route.params.jobId}`,
  );

  return (
    <LoadingWrapper isLoading={isLoading} error={error}>
      <ScrollView>
        {Object.keys(data).length > 0 && (
          <>
            <Header
              name={data.name}
              level={data.levels[0].name}
              location={data.locations[0].name}
            />
            <Detail content={data.contents} />
            <View style={{marginVertical: 15, marginBottom: 25}}>
              <Button />
            </View>
          </>
        )}
      </ScrollView>
    </LoadingWrapper>
  );
}

export default JobDetail;

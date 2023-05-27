import {useState, useEffect} from 'react';

import client from '../helpers/client';

function useFetch(url, config = {}) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    client
      .request({
        url: url,
        method: 'get',
        ...config,
      })
      .then(res => res.data)
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return [data, isLoading, error];
}

export default useFetch;

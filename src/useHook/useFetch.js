import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (url0 = null, headers0 = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url = url0, headers = headers0) => {
    try {
      const {data: responsData} = await axios.get(url, headers);
      setData(responsData);
    } catch (err) {
      console.log(err);
      setError(err);
      return err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {data, loading, error, fetchData}; //loading, error
};

export default useFetch;

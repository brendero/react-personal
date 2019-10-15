import { useEffect, useState } from 'react';
import axios from 'axios';

export const fetchUrl = (endpoint: string, initialState?: any) => {
  const [data, setData] = useState(initialState);
  useEffect(() => {
    const fetchData = async() => {
      axios.get(endpoint)
        .then(res => {
          setData(res.data)
        })
        .catch(err => console.log(err))

    }
  }, [endpoint])
}
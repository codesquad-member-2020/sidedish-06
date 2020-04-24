import { useState, useEffect } from 'react';

const BASE_URL = 'https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/baminchan';

const getApiUrl = (categoryString, hash = null) => {
  if (hash) return `${BASE_URL}/${categoryString}/${hash}`;
  return `${BASE_URL}/${categoryString}/`;
};

export const API_URL = {
  main(hash = null) {
    return getApiUrl('main', hash);
  },

  soup(hash = null) {
    return getApiUrl('soup', hash);
  },

  side(hash = null) {
    return getApiUrl('side', hash);
  },

  detail(hash) {
    return getApiUrl('detail', hash);
  },
};

export const useFetch = (url, setState) => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setState(data);
    setIsLoading(true);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading;
};
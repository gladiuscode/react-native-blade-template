import axios from 'axios';

const instance = axios.create();

const initInstanceDefaults = () => {
  instance.defaults.headers.common = {
    Accept: 'application/json',
  };

  const postAndPutHeaders = {
    ['Content-Type']: 'application/json',
  };
  instance.defaults.headers.post = postAndPutHeaders;
  instance.defaults.headers.put = postAndPutHeaders;
};

initInstanceDefaults();

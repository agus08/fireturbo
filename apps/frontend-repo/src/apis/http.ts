import axios from 'axios';
import { log } from '@repo/logger';

const http = () => {
  const defaultOptions = {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Create instance
  const instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  // instance.interceptors.request.use(async function (config) {
  //   const token = await getTokens(await cookies(), authConfig);
  //   console.log('token', token);
  //   config.headers.Authorization = token ? `Bearer ${token.token}` : '';
  //   return config;
  // });

  instance.interceptors.request.use(request => {
    log('Axios Starting Request', JSON.stringify(request, null, 2))
    return request
  })

  instance.interceptors.request.use(request => {
    log('Starting Request', JSON.stringify(request, null, 2))
    return request
  })

  return instance;
};

export default http;
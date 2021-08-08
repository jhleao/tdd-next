import axios from 'axios';

// eslint-disable-next-line
if (process.env.NODE_ENV === 'test') require('dotenv').config({ path: '.env.test' });

const apiInstance = axios.create(
  { withCredentials: true, baseURL: process.env.NEXT_PUBLIC_API_BASE_URL },
);

export default apiInstance;

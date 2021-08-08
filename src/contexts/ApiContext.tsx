import { createContext, useContext, useState } from 'react';
import apiInstance from '@api/.';
import { AxiosInstance } from 'axios';

interface ApiContextI {
  api: AxiosInstance
}

export const ApiContext = createContext({} as ApiContextI);

export const useApi = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  const [api] = useState(() => apiInstance);

  const data = { api };

  return (
    <ApiContext.Provider value={data}>
      {children}
    </ApiContext.Provider>
  );
};

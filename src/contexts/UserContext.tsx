import { TokenResponse, User } from '@ts/.';
import { AxiosResponse } from 'axios';

import { createContext, useContext, useEffect, useState } from 'react';
import { useApi } from './ApiContext';

interface UserContextI {
  user: User | null;
  setUser: (u: User) => void;
}

const UserContext = createContext({} as UserContextI);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const { api } = useApi();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const refreshToken = () => {
    api
      .get('/auth/refresh')
      .then(({ data: { user: newUser, token, expiresIn } }
      : AxiosResponse<TokenResponse>) => {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setTimeout(refreshToken, expiresIn - 5000);
        setUser(newUser);
      })
      .catch((e) => {
        console.log({ errorRefreshingToken: e });
        setUser(null);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => { refreshToken(); }, []);
  // useEffect(() => { refreshToken(); }, [user]);

  const data = { user, setUser };
  
  return (
    <UserContext.Provider value={data}>
      { loading ? null : children }
    </UserContext.Provider>
  );
};

import React from 'react';
import UserContext from './usercontext';
import { useState } from 'react';

const userContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default userContextProvider;

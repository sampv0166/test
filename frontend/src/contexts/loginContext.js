import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
    
  const [user, setUser] = useState('');

  return (
    <LoginContext.Provider value={[user, setUser]}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;

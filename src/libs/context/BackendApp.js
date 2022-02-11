import React, {createContext, useContext, useState} from "react";

const BackendAppContext = createContext();

const BackendAppProvider = ({children}) => {
  const value = {
    message: 'Hello hope...!'
  }

  return <BackendAppContext.Provider value={value}>
    {children}
  </BackendAppContext.Provider>
}

const useBackendApp = () => {
  return useContext(BackendAppContext);
}

export {BackendAppProvider, useBackendApp};
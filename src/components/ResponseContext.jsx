import React, { createContext, useContext, useState } from "react";

// Creează contextul
const ResponseContext = createContext();

export const useResponseContext = () => {
  return useContext(ResponseContext);
};

export const ResponseProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleResponse = async (response) => {
    if (response.ok) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  return (
    <ResponseContext.Provider value={{ isAuthenticated, handleResponse }}>
      {children}
    </ResponseContext.Provider>
  );
};

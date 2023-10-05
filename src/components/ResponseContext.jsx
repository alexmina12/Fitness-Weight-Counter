import React, { createContext, useContext, useEffect, useState } from "react";

const ResponseContext = createContext();

export const useResponseContext = () => {
  return useContext(ResponseContext);
};

export const ResponseProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const handleLogOut = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isLoggedIn", "false");
  };

  const handleLogIn = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleResponse = async (response) => {
    if (response.ok) {
      handleLogIn();
    } else {
      setIsAuthenticated(false);
      localStorage.setItem("isLoggedIn", "false");
    }
  };

  useEffect(() => {
    console.log("IsAuthenticated:", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <ResponseContext.Provider
      value={{ isAuthenticated, handleResponse, handleLogIn, handleLogOut }}
    >
      {children}
    </ResponseContext.Provider>
  );
};

const SidebarContext = createContext();

export function useSidebar() {
  return useContext(SidebarContext);
}

export function SidebarProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

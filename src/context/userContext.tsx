import React, { createContext, useContext, useState, useEffect } from "react";

interface UserContextProps {
  userName: string | null;
  isLoggedIn: boolean;
  setUserName: React.Dispatch<React.SetStateAction<string | null>>;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [userName, setUserName] = useState<string | null>(
    localStorage.getItem("userName") || null
  );
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    !!localStorage.getItem("token")
  );

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setUserName(null);
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ userName, isLoggedIn, setUserName, setIsLoggedIn, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

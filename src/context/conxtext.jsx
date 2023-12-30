import { createContext, useContext, useState } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [menus, setMenus] = useState([]);
  return (
    <AppContext.Provider value={{ menus, setMenus }}>
      {children}
    </AppContext.Provider>
  );
};

const useDataContext = () => {
  return useContext(AppContext);
};

export { useDataContext, AppProvider };

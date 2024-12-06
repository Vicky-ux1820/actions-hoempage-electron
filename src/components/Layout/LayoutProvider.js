import React, { createContext, useState, useContext } from 'react';

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [isLeftSidebarVisible, setLeftSidebarVisible] = useState(true);
  const [isRightSidebarVisible, setRightSidebarVisible] = useState(true);
  const [isBottomBarVisible, setBottomBarVisible] = useState(true);

  const toggleLeftSidebar = () => setLeftSidebarVisible((prev) => !prev);
  const toggleRightSidebar = () => setRightSidebarVisible((prev) => !prev);
  const toggleBottomBar = () => setBottomBarVisible((prev) => !prev);

  return (
    <LayoutContext.Provider
      value={{
        isLeftSidebarVisible,
        isRightSidebarVisible,
        isBottomBarVisible,
        toggleLeftSidebar,
        toggleRightSidebar,
        toggleBottomBar,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);

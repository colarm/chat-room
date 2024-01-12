// AppContext.js
import React, { createContext, useContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const contextValue = {
    // 定义你想要传递的上下文数据
    // 例如：user, theme, settings, 等等
    // 这里我们传递 context 对象
    context: {},
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };

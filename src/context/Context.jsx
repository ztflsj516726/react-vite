// src/context/UserContext.js
import React, { createContext, useContext } from "react";

// 创建 UserContext
const UserContext = createContext();

// 创建 ContextProvider 组件
const ContextProvider = ({ children }) => {

  const getUserInfo = () => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  }; // 获取用户信息
  const setUserInfo = (userInfo) =>{
    localStorage.setItem('user', JSON.stringify(userInfo));
  } 

  return (
    <UserContext.Provider value={{ getUserInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
// 使用自定义 hook 来访问 UserContext
const useComContext = () => {
  return useContext(UserContext);
};

export { ContextProvider, useComContext };


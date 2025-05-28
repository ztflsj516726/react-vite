import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// 引入 antd 样式
import "antd/dist/reset.css";
// 引入自定义全局样式
import "./styles/global.scss";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

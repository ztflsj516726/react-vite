import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import { ContextProvider } from "./context/Context"; 
function App() {
  const element = useRoutes(routes);
  return element;
}

function AppWrapper() {
  return (
    <ContextProvider>  {/* 包裹整个应用 */}
      <App />
    </ContextProvider>
  );
}

export default AppWrapper;

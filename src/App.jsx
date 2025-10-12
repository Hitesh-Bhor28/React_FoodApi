import Body from "./components/Body";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = ()=> { 
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  )
}

export default App

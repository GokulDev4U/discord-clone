import "./App.css";
import Header from "./components/Header";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Hero from "./components/Hero";
import Home from "./components/Home";

function App() {
  return(
   <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<div><Header /><Hero /></div>} />
        <Route path="/channels" element={<Home/>} />
        <Route path="/channels/:id" element={<Home/>} />
        <Route
        path="*"
        element={<Navigate to="/" />}
    />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App;

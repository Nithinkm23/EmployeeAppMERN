import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Login from "./components/Login";
import Viewall from "./components/Viewall";
import Addform from "./components/Addform";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/viewall" element={<Viewall />} />
        <Route path="/addform" element={<Addform/>} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;

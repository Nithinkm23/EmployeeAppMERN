import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Login from "./components/Login";
import Viewall from "./components/Viewall";
import Addform from "./components/Addform";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/viewall" element={<Main child={<Viewall/>}/>} />
        <Route path="/addform" element={<Main child={<Addform/>}/>} />
        <Route path="/header" element={<Header/>} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;

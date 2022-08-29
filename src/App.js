import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //3 componentes básicos para crear enrutador en React 
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { Users } from "./components/Users";

const App = () => {

  return (
    <Router>
      <Navbar/>

      <div className="container p-4">
        <Routes>
            <Route path="/about" element={<About />} />           
            <Route path="/" element={<Users />} />
        </Routes>
      </div>  
    </Router>
  );
}

export default App;

import React from "react";
import Home from "./component/Home";
import Error from "./component/Error";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./component/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;

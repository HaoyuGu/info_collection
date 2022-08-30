import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from "./pages/main";
import SelectBuilding from "./pages/select_building";


function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/select_building" element={<SelectBuilding/>} />
                <Route path="/select_unit" element={<SelectBuilding/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;

import React from 'react';
import Home from './Home';
import Uploaded from './Uploaded';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/uploaded" element={<Uploaded/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

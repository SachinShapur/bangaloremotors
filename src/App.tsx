import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';

function App() {



  return (
//     <div className="App">
//       <Navbar/>
// Bangalore Motors

//     </div>

<div className="App">
<Router>
  <Navbar/>
  <div className="container">
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Products />} />
  </Routes>
  </div>
  {/* <Footer /> */}
</Router>
</div>
  );
}

export default App;

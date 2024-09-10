import { useState } from "react";
import Users from "./Users.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/home.jsx";
import Create from "./Pages/create.jsx";
import Edit from "./Pages/edit.jsx";
import View from "./Pages/View.jsx";
import AddFood from "./Pages/addfood.jsx";
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/create"} className="nav-link">
              Create
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/addfood"} className="nav-link">
              Add Food
            </Link>
          </li>
        </div>
      </nav>
      <div className="container ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/addfood" element={<AddFood />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

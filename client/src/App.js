import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const [user, setUser] = useState(null);
  
  const logout = () => {};

  useEffect(() => {
    // Axios({
    //   method: "GET",
    //   withCredentials: true,
    //   url: "http://localhost:4000/user",
    // }).then((res) => {
    //   setUser(res.data);
    //   console.log(res.data);
    // });
  }, []);

  return (
    <Router>
      <Navbar user={user} logout={logout} />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route
          path="/login"
          element={user ? <Navigate to="/user" /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/user" /> : <Register />}
        /> */}
        <Route path="/user" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;

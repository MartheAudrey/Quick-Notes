import React from "react";
import Landing from "./routes/Landing";
import { Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import Signup from "./routes/Signup";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
    </>
  );
}

export default App;

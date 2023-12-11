import React from "react";
import NavBar from "./component/NavBar";
import { Outlet } from "react-router-dom";
// import { Routes,Route } from 'react-router-dom'
function App() {
  return (
    <div className="flex justify-center items-center flex-col mt-6">
      <h1 className="text-3xl">Welcome To React Router Dom</h1>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;

import React from "react";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;

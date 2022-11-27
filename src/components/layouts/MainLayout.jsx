import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import SocialMedia from "../SocialMedia";

const MainLayout = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-secondary ">
      <Navbar />
      <div className="text-white h-screen">
        <SocialMedia/>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

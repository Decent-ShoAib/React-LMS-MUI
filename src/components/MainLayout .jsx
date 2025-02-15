import React from "react";
import { Outlet } from "react-router-dom";
import LmsScreen from "./LmsScreen";
import ResponsiveAppBar from "./ResponsiveAppBar";

const MainLayout = () => {
  return (
    <>
      {/* 🟢 Header ko fixed kiya aur width 100% di */}
      <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
        <ResponsiveAppBar />
      </div>

      <div style={{ display: "flex", height: "100vh", marginTop: "64px" }}>
        {/* 🔵 Sidebar ab header ke neeche aayega */}
        <div style={{ width: "25vw", background: "#111827", color: "white", height: "100vh" }}>
          <LmsScreen />
        </div>

        {/* 🔴 Page Content sidebar ke sath right side pe show hoga */}
        <div style={{ flex: 1, padding: "20px",  }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;

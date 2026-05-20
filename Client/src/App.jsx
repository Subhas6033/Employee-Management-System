import React from "react";
import { Footer, Header, Container } from "./components/index";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f8fafc] via-[#e0f2fe] to-[#f8fafc]">
      <Header />
      <main className="flex-1 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(14,165,233,0.08)_0%,_transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(30,58,95,0.06)_0%,_transparent_50%)] pointer-events-none"></div>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;

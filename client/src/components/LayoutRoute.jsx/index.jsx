import { Outlet } from "react-router-dom";

import Header from "@components/Header";
import Footer from "@components/Footer";

import React from "react";

const LayoutRoute = () => {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutRoute;

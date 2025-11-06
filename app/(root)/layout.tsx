import Header from "@/components/Header";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <main className="min-h-screen text-gray-400">
    <Header/>
  </main>;
};

export default Layout;

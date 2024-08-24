"use client";
import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode, useState } from "react";

function DashboardLayout({ children }: { children: ReactNode }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div>
      <main className="flex">
        <Sidebar toggleMenu={toggleMenu} />
        <section className="flex-col w-10/12">
          <Header />
          <PageWrapper>{children}</PageWrapper>
        </section>
      </main>
    </div>
  );
}

export default DashboardLayout;

'use client';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import React, { useState } from 'react';

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="h-screen relative">
      <Header onToggleSidebar={toggleSidebar} />

      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={toggleSidebar}
          />

          <div className="fixed inset-y-0 left-0 z-50 w-64">
            <Sidebar onToggleSidebar={toggleSidebar} />
          </div>
        </>
      )}

      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

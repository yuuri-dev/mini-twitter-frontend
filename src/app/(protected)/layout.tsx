'use client';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import React, { useState } from 'react';

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="h-screen">
      <Header onToggleSidebar={toggleSidebar} />
      <div className="flex h-screen">
        {isSidebarOpen && <Sidebar onToggleSidebar={toggleSidebar} />}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

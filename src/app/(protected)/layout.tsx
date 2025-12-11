'use client';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import React, { useState } from 'react';

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen relative flex flex-col">
      <Header onToggleSidebar={toggleSidebar} />

      <main className="md:flex flex-1 relative">
        <div className="md:block hidden w-64">
          <Sidebar onCloseSidebar={closeSidebar} />
        </div>
        {isSidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={closeSidebar}
            />

            <div className="fixed inset-y-0 left-0 z-50 w-64">
              <Sidebar onCloseSidebar={closeSidebar} />
            </div>
          </>
        )}

        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

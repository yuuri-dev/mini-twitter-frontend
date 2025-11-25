import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import React from 'react';

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <Header />
      <div className='flex'>
        <Sidebar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

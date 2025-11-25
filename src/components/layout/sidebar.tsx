'use client';
import React from 'react';
import { Button } from '../ui/button';
import { usePathname, useRouter } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname()

  const menuItems = [
    { label: 'ホーム', path: '/home' },
    { label: '投稿', path: '/tweets/new' },
    { label: 'プロフィール', path: '/profile/me' },
  ];

  return (
    <div className="w-64 pt-10 border-r bg-white min-h-screen px-4">
      {menuItems.map((item) => {
        const isActive = pathname.startsWith(item.path);

        return (
          <Button
            key={item.path}
            variant="ghost"
            className={`
              w-full justify-start my-2 px-4 py-3 text-left
              ${
                isActive
                  ? 'bg-blue-100 text-blue-700 font-semibold'
                  : 'text-gray-700'
              }
            `}
            onClick={() => router.push(item.path)}
          >
            {item.label}
          </Button>
        );
      })}
    </div>
  );
};

export default Sidebar;

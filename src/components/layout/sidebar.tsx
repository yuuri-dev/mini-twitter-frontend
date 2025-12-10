'use client';
import React from 'react';
import { Button } from '../ui/button';
import { usePathname, useRouter } from 'next/navigation';
import { X } from 'lucide-react';

const Sidebar = ({ onToggleSidebar }: { onToggleSidebar: () => void }) => {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { label: 'ホーム', path: '/home' },
    { label: '投稿', path: '/tweets/new' },
    { label: 'プロフィール', path: '/profile/me' },
  ];

  const handleMove = (path: string) => {
    router.push(path);
    onToggleSidebar();
  };

  return (
    <div className="relative sm:w-64 w-40 pt-10 border-r bg-white min-h-screen px-4">
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-2 md:hidden" // PCで消したければ md:hidden
        onClick={onToggleSidebar}
      >
        <X className="w-4 h-4" />
        <span className="sr-only">閉じる</span>
      </Button>
      {menuItems.map((item) => {
        const isActive = pathname.startsWith(item.path);
        return (
          <>
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
              onClick={() => handleMove(item.path)}
            >
              {item.label}
            </Button>
          </>
        );
      })}
    </div>
  );
};

export default Sidebar;

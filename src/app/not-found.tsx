'use client'
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

const NotFound = () => {
    const router = useRouter();
    return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <h1 className="text-bold text-4xl pb-3">404 Not Found</h1>
          <p className="text-bold text-2xl pb-1.5"> ページが見つかりませんでした。</p>
            <Button onClick={(() => router.push('/'))}>Topに戻る</Button>
    </div>
  );
};

export default NotFound;

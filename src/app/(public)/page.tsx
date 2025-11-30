'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

const Top = () => {
  const router = useRouter()
  return (
    <div>
      <p>topページです</p>
      <Button onClick={() => router.push('/auth/login')}>ログイン</Button>
      <Button onClick={() => router.push('/auth/signup')}>新規登録</Button>
    </div>
  );
};

export default Top;

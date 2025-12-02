'use client';
import Header from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

const Top = () => {
  const router = useRouter();
  return (
    <div>
      <Header />
      <div className="w-full md:grid grid-cols-2 gap-3">
        <div className="h-screen flex justify-center items-center">
          <img
            src="twitter_icon.png"
            alt="icon"
            className="md:w-[300px] md:h-[300px]"
          />
        </div>
        <div className="mt-24">
          <h1 className="text-6xl font-bold">すべての話題が、ここに。</h1>
          <h2 className="text-3xl font-semibold mt-15">
            今すぐ参加しましょう。
          </h2>
          <p className="text-xl font-midium mt-12">新規登録はこちらから</p>
          <Button onClick={() => router.push('/auth/signup')}>
            アカウントを作成
          </Button>
          <p className="font-thin text-xs w-80 my-3">
            アカウントを登録することにより、利用規約とプライバシーポリシー（Cookieの使用を含む）に同意したとみなされます。
          </p>
          <p className="text-xl font-midium mt-12">アカウントをお持ちの方</p>
          <Button onClick={() => router.push('/auth/login')}>ログイン</Button>
        </div>
      </div>
    </div>
  );
};

export default Top;

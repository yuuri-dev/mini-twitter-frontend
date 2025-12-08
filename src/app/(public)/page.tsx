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
      <div className="w-full grid md:grid-cols-2 gap-3 sm:p-10 p-3">
        <div className="md:order-1 order-2 flex justify-center items-center">
          <img
            src="twitter_icon.png"
            alt="icon"
            className="w-40 sm:w-52 md:w-64 lg:w-80 max-w-full h-auto object-contain"
          />
        </div>
        <div className="mt-24 order-1 md:order-2 ">
          <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold sm:text-center">
            すべての話題が、ここに。
          </h1>
          <h2 className="md:text-3xl sm:text-xl font-semibold mt-15">
            今すぐ参加しましょう。
          </h2>
          <p className="text-xl font-midium mt-12">新規登録はこちらから</p>
          <Button
            className="my-3 ml-5"
            onClick={() => router.push('/auth/signup')}
          >
            アカウントを作成
          </Button>
          <p className="font-thin text-xs max-w-80 my-3">
            アカウントを登録することにより、利用規約とプライバシーポリシー（Cookieの使用を含む）に同意したとみなされます。
          </p>
          <p className="text-xl font-midium mt-12">アカウントをお持ちの方</p>
          <Button
            className="my-3 ml-5"
            onClick={() => router.push('/auth/login')}
          >
            ログイン
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Top;

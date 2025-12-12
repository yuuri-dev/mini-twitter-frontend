'use client';
import Header from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/ui/spinner';
import { api } from '@/lib/api';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      setIsLoading(true);
      const res = await api.post('/auth/login', {
        email,
        password,
      });
      const { accessToken } = res.data;
      localStorage.setItem('token', accessToken);

      router.push('/home');
    } catch (err) {
      alert('ログイン失敗');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Header />
      <div className="max-w-[600px] m-auto my-10 px-10">
        <h1 className="text-center mb-3 sm:text-3xl text-2xl text-bold">
          ログイン
        </h1>

        <form className="space-y-4" onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="text-center">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'ログイン中' : 'ログイン'}
              {isLoading && <Spinner />}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;

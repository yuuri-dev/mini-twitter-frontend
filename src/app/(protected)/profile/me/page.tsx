'use client';
import { api } from '@/lib/api';
import React, { useEffect, useState } from 'react';
import { formatRelativeTime } from '@/lib/utils';
import { Spinner } from '@/components/ui/spinner';

type MyTweet = {
  id: number;
  content: string;
  createdAt: string;
};

type User = {
  email: string;
  userName: string;
};

const Me = () => {
  const [user, setUser] = useState<User | null>(null);
  const [tweets, setTweets] = useState<MyTweet[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const userRes = await api.get('/users/me');
      setUser({
        email: userRes.data.email,
        userName: userRes.data.userName,
      });

      const tweetsRes = await api.get('/tweets/me');
      setTweets(tweetsRes.data);
    };

    fetchData();
  }, []);

  if (!user)
    return (
      <div className='w-full flex justify-center items-center'>
        <Spinner />
      </div>
    );

  return (
    <div className="w-full m-10">
      <div className="m-auto w-fit space-y-2">
        <div className="flex gap-10">
          <p>ユーザー名</p>
          <p className="">{user.userName}</p>
        </div>

        <div className="flex gap-10">
          <p>メールアドレス</p>
          <p>{user.email}</p>
        </div>
      </div>

      <div className="mt-10 max-w-[500px] m-auto">
        <h2 className="text-2xl text-center">過去のツイート</h2>

        {tweets.map((tweet) => (
          <div
            key={tweet.id}
            className="flex justify-between m-5 border-b pb-3"
          >
            <p>{tweet.content}</p>
            <p className="text-gray-500 text-sm">
              {formatRelativeTime(tweet.createdAt)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Me;

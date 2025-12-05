'use client';
import { api } from '@/lib/api';
import React, { useEffect, useState } from 'react';
import { formatRelativeTime } from '@/lib/utils';

type myTweets = {
  id: number;
  content: string;
  createdAt: string;
};
const Me = () => {
  const [userName, setUserName] = useState('');
  const [userTweets, setUserTweets] = useState([]);
  useEffect(() => {
    const getUserData = async () => {
      const userData = await api.get('/users/me');
      setUserName(userData.data.email);
      const myTweets = await api.get('/tweets/me');
      setUserTweets(myTweets.data);
    };
    getUserData();
  }, []);
  return (
    <div>
      <p>profile</p>
      <p>ユーザー名</p>
      <p>メールアドレス</p>
      <p>{userName}</p>

      <h2 className="text-2xl">過去のツイート</h2>

      {userTweets &&
        userTweets.map((tweet: myTweets) => (
          <div key={tweet.id}>
            <p>{tweet.content}</p>
            <p className="text-gray-500 text-sm">
              {formatRelativeTime(tweet.createdAt)}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Me;

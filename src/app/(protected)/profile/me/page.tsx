'use client';
import { api } from '@/lib/api';
import React, { useEffect, useState } from 'react';

type myTweets = {
  id: number;
  contents: string;
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

      <p>過去のツイート</p>

      {userTweets &&
        userTweets.map((tweet: myTweets) => (
          <div key={tweet.id}>
            <p>{tweet.contents}</p>
          </div>
        ))}
    </div>
  );
};

export default Me;

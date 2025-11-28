'use client';
import { api } from '@/lib/api';
import React, { useEffect, useState } from 'react';

const Me = () => {
  const [userName, setUserName] = useState('');
  useEffect(() => {
    const getUserData = async () => {
      const userData = await api.get('/users/me');
      setUserName(userData.data.email);
      const myTweets = await api.get('/tweets/me');
    };
    getUserData();
  });
  return (
    <div>
      <p>profile</p>
      <p>ユーザー名</p>
      <p>メールアドレス</p>
      <p>{userName}</p>

      <p>過去のツイート</p>
      <p>{ }</p>
    </div>
  );
};

export default Me;

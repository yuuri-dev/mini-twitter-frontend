'use client';
import Tweet from '@/components/feature/tweet/tweet';
import { api } from '@/lib/api';
import React, { useEffect, useState } from 'react';

// {
//         "id": 5,
//         "content": "おやすみaaa！",
//         "createdAt": "2025-11-21T16:59:15.139Z",
//         "updatedAt": "2025-11-21T17:06:24.224Z",
//         "userId": 4,
//         "user": {
//             "id": 4,
//             "userName": "太郎"
//         }
//     },

const Home = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    async function fetchTweets() {
      try {
        const res = await api.get('/tweets');
        setTweets(res.data);
      } catch (err) {
        alert('ツイートの取得失敗');
        console.error(err);
      }
    }
    fetchTweets();
  }, []);

  return (
    <div>
      {tweets ? tweets.map((t, i) => <Tweet data={t} key={i} />) : null}
    </div>
  );
};

export default Home;

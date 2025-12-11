'use client';
import Tweet from '@/components/feature/tweet/tweet';
import TweetSkeleton from '@/components/feature/tweet/tweet-skeleton';
import { api } from '@/lib/api';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [tweets, setTweets] = useState([]);
  const [isLoaing, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchTweets() {
      try {
        setIsLoading(true);
        const res = await api.get('/tweets');
        setTweets(res.data);
      } catch (err) {
        alert('ツイートの取得失敗');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTweets();
  }, []);

  return (
    <div>
      {isLoaing ? (
        <TweetSkeleton />
      ) : (
        <div>
          {tweets ? tweets.map((t, i) => <Tweet data={t} key={i} />) : null}
        </div>
      )}
    </div>
  );
};

export default Home;

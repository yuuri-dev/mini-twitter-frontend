'use client';
import { api } from '@/lib/api';
import React, { useEffect, useState } from 'react';
import { formatRelativeTime } from '@/lib/utils';
import { Spinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';

type MyTweet = {
  id: number;
  content: string;
  createdAt: string;
};

type User = {
  email: string;
  userName: string;
  iconUrl: string | null;
};

export default function Me() {
  const [user, setUser] = useState<User | null>(null);
  const [tweets, setTweets] = useState<MyTweet[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const userRes = await api.get('/users/me');
      setUser(userRes.data);

      const tweetsRes = await api.get('/tweets/me');
      setTweets(tweetsRes.data);
    };
    fetchData();
  }, []);

  const handleUpload = async () => {
    if (!file) return alert('画像を選択してください');

    const formData = new FormData();
    formData.append('file', file);

    try {
      setLoading(true);
      const res = await api.post('/users/icon', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      // 画面更新
      setUser((prev) => (prev ? { ...prev, iconUrl: res.data.iconUrl } : prev));
      setFile(null);
    } catch (e) {
      alert('アップロード失敗');
    } finally {
      setLoading(false);
    }
  };
  

  if (!user)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="w-full m-10">
      <div className="flex flex-col items-center gap-3">
        <label className="relative cursor-pointer group">
          <img
            src={user.iconUrl ?? '/default-avatar.png'}
            alt="avatar"
            className="w-24 h-24 rounded-full object-cover border"
          />

          {/* ホバー時のオーバーレイ */}
          <div
            className="absolute inset-0 rounded-full bg-black/40 flex items-center justify-center
                    opacity-0 group-hover:opacity-100 transition"
          >
            <span className="text-white text-sm">変更</span>
          </div>

          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (!e.target.files || !e.target.files[0]) return;

              const selectedFile = e.target.files[0];

              // サイズ制限（10MBに合わせる）
              if (selectedFile.size > 10 * 1024 * 1024) {
                alert('画像は10MB以下にしてください');
                e.target.value = ''; // 選択リセット
                return;
              }

              // 画像形式チェック（任意だけどおすすめ）
              if (!selectedFile.type.startsWith('image/')) {
                alert('画像ファイルを選択してください');
                e.target.value = '';
                return;
              }

              setFile(selectedFile);
            }}
          />
        </label>

        <Button onClick={handleUpload} disabled={loading}>
          {loading ? 'アップロード中...' : 'アップロード'}
        </Button>

        <div className="space-y-1">
          <p>ユーザー名：{user.userName}</p>
          <p>メール：{user.email}</p>
        </div>
      </div>

      <div className="mt-10 max-w-[400px] m-auto">
        <h2 className="text-xl text-center mb-3">過去のツイート</h2>

        {tweets.map((tweet) => (
          <div key={tweet.id} className="flex justify-between border-b py-2">
            <p>{tweet.content}</p>
            <p className="text-gray-500 text-sm">
              {formatRelativeTime(tweet.createdAt)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

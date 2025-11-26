'use client';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
// Textarea と Button は同じ
import { api } from '@/lib/api';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Post = () => {
  const [contents, setContents] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/tweets', { content: contents });
      setContents('');
      router.refresh();
    } catch (err) {
      console.error('投稿失敗', err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto px-4 py-4"
    >
      <Card className="w-full max-w-xl mx-auto">
        <CardContent className="pt-6">
          <Textarea
            value={contents}
            onChange={(e) => setContents(e.target.value)}
            placeholder="いまどうしてる？"
          />
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button disabled={!contents.trim()}>投稿</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default Post;

import { api } from '@/lib/api';
import { Heart } from 'lucide-react';
import React, { useState } from 'react';

const Tweet = ({ data }: any) => {
  const [isLike, setIsLike] = useState(data.isLiked); //後で取得するように変更する
  const [likeCount, setLikeCount] = useState(data.likeCount);
  const handleLike = async () => {
    setIsLike((prev:boolean) => !prev);
    setLikeCount((prev:number) => (isLike ? prev - 1 : prev + 1));

    try {
      if (isLike) {
        const res = await api.delete(`likes/${data.id}`);
        console.log(res);
      } else {
        const res = await api.post('likes', {
          tweetId: data.id,
        });
        console.log(res);
      }
    } catch (err) {
      console.error(err);
      // 失敗したら UI を元に戻す
      setIsLike(isLike);
      setLikeCount((prev:number) => (isLike ? prev + 1 : prev - 1));
    }
  };
  return (
    <div className="px-5 pt-5">
      <div className="flex items-center gap-3">
        <img src="user_icon.jpeg" alt="icon" className="w-10" />
        <p className="font-bold text-lg">{data.user.userName}</p>
        <p className="text-sm">{data.createdAt.split('T')[0]}</p>
      </div>
      <p className="ml-10">{data.content}</p>
      <div className="flex">
        <Heart
          onClick={handleLike}
          className={`
          h-6 w-6 text-red-500
           ${isLike ? 'fill-red-500' : 'fill-white'}
          `}
        />
        <span>{likeCount}</span>
      </div>
    </div>
  );
};

export default Tweet;

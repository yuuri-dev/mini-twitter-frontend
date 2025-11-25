import React from 'react';

const Tweet = ({ data }: any) => {
  return (
    <div className='px-5 pt-5'>
      <div className='flex items-center gap-3'>
        <img src="user_icon.jpeg" alt="icon" className="w-10" />
        <p className="font-bold text-lg">{data.user.userName}</p>
        <p className="text-sm">{data.createdAt.split('T')[0]}</p>
      </div>
      <p className="ml-10">{data.content}</p>
    </div>
  );
};

export default Tweet;

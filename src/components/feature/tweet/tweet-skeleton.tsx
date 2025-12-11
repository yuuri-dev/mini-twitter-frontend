import { Skeleton } from '@/components/ui/skeleton';

export default function TweetSkeleton() {
  return (
    <div className="px-5 pt-5">
      {Array.from({ length: 10 }).map((_,i) => (
        <TweetSkeletonPost key={i}/>
      ))}
    </div>
  );
}

export const TweetSkeletonPost = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-4 w-20" />
      </div>

      <div className="ml-10 mt-3 space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>

      <div className="flex items-center gap-2 mt-3 ml-10">
        <Skeleton className="h-6 w-6 rounded-md" />
        <Skeleton className="h-4 w-6" />
      </div>
    </>
  );
};

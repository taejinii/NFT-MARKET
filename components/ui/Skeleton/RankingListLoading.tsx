import Skeleton from ".";
export default function RankingListLoading() {
  return (
    <>
      {[...Array(20)].map((_, index) => {
        return (
          <li key={index} className="flex items-center w-full p-2 space-x-4 ">
            <Skeleton className="w-6 h-6 rounded-full" />
            <div className="flex flex-1 grow-[3] items-center  space-x-4">
              <Skeleton className="w-12 h-12 " />
              <div className="flex flex-col items-start gap-2 sm:items-center">
                <Skeleton className="w-40 h-6 " />
                <Skeleton className="w-16 h-4 bloack sm:hidden" />
              </div>
            </div>
            <Skeleton className="flex-1 hidden h-5 sm:block" />
            <Skeleton className="flex-1 hidden h-5 sm:block" />
            <Skeleton className="flex-1 hidden h-5 sm:block" />
            <Skeleton className="flex-1 h-5 " />
          </li>
        );
      })}
    </>
  );
}

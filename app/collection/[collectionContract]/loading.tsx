import Skeleton from "@/components/ui/Skeleton";
export default function CollectionListLoading() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {[...Array(20)].map((index) => {
        return (
          <div
            key={index}
            className="flex flex-col p-3 w-full h-auto  max-h-96 gap-4 rounded-xl bg-[#18191E] "
          >
            <Skeleton className="h-48 rounded-xl" />
            <div className="flex flex-col items-start gap-2 ">
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-4/6 h-6" />
            </div>

            <Skeleton className="w-full h-24 rounded-xl" />
          </div>
        );
      })}
    </div>
  );
}

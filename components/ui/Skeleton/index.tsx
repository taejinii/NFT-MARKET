export default function Skeleton({ className }: { className: string }) {
  return (
    <div className={`bg-[#212528] animate-pulse rounded-md ${className}`} />
  );
}

export default function Skeleton({ className }: { className: string }) {
  return (
    <div className={`bg-slate-300 rounded-xl animate-pulse  ${className}`} />
  );
}

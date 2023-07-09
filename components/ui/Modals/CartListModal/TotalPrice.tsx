export default function TotalPrice({ totalPrice }: { totalPrice: number }) {
  return (
    <div className="flex items-center justify-between w-full pt-2 text-xl font-bold border-t-2">
      <span>Total Price</span>
      <span>{totalPrice.toFixed(2)} ETH</span>
    </div>
  );
}

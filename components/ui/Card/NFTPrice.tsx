export default function NFTPrice({ price }: { price: number }) {
  return (
    <div className="flex h-24 justify-around bg-[#212528] rounded-b-xl p-2 ">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="text-[#5E6064] font-bold ">Price</div>
        <div className="flex gap-1 font-bold text-white">
          <span>{price}</span>
          {"ETH"}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="text-[#5E6064] font-bold ">Last Price</div>
        <div className="flex gap-1 font-bold text-white">
          <span>0.8</span>
          {"ETH"}
        </div>
      </div>
    </div>
  );
}

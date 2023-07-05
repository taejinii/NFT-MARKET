export default function NFTPrice({ invalidNFT }: { invalidNFT: boolean }) {
  return (
    <div className="flex flex-col h-24  md:flex-row justify-around bg-[#212528] rounded-xl p-2">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="text-[#5E6064] font-bold ">Price</div>
        <div className="flex gap-1 font-bold text-white">
          <span>{"10"}</span>
          {"ETH"}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="text-[#5E6064] font-bold ">Last Price</div>
        <div className="flex gap-1 font-bold text-white">
          <span>4.5</span>
          {"ETH"}
        </div>
      </div>
    </div>
  );
}

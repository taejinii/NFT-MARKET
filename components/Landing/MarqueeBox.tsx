export default function MarqueeBox() {
  return (
    <div className=" bg-[#0D82F9] absolute bottom-0  ">
      <div className="flex gap-2 text-white font-bold text-xl py-4 whitespace-nowrap ">
        {Array(15)
          .fill(1)
          .map((index) => {
            return (
              <div key={index} className="animate-marquee ">
                <span>NFT MARKET PLACE FOR YOU! </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

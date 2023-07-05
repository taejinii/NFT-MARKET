interface NFTPriceType {
  last_sale?: { price_token: number; token_symbol: string };
}
export default function NFTPrice({ last_sale }: NFTPriceType) {
  return (
    <div className="flex flex-col h-24  md:flex-row justify-around bg-[#212528] rounded-xl p-2">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="text-[#5E6064] font-bold ">Price</div>
        <div className="flex gap-1 font-bold text-white">
          <span>{last_sale ? last_sale.price_token.toFixed(2) : "10"}</span>
          {last_sale ? last_sale.token_symbol : "ETH"}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <div className="text-[#5E6064] font-bold ">Last Price</div>
        <div className="flex gap-1 font-bold text-white">
          <span>4.5</span>
          {last_sale ? last_sale.token_symbol : "ETH"}
        </div>
      </div>
    </div>
  );
}

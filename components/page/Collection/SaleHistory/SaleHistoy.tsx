import Link from "next/link";
import { getTimeDifference } from "@/utils/getTimeDifference";
import { NFTTransAction } from "@/types/types";

export default function SaleHistoy({ history }: { history: NFTTransAction }) {
  const { transactions = [] } = history;
  return (
    <div className="w-full overflow-auto font-bold max-h-80">
      <div className="sticky top-0 flex p-2 space-x-4 bg-white border-b-2 border-black">
        <div className="flex-1">Event</div>
        <div className="flex-1">Price</div>
        <div className="flex-1">From</div>
        <div className="flex-1">To</div>
        <div className="flex-1">Date</div>
      </div>

      {transactions.map((transaction, index) => {
        const currentTime = Date.now();
        const timeDif = currentTime - transaction.time;
        const timeString = getTimeDifference(timeDif);
        return (
          <div
            key={index}
            className="flex w-full px-2 py-4 space-x-4 border-b-2"
          >
            <div className="flex-1">{transaction.action}</div>
            <div className="flex-1">
              {transaction.price?.value
                ? transaction.price?.value.toFixed(2)
                : ""}
              {transaction.price?.value ? "ETH" : ""}
            </div>
            <Link
              className="flex-1 truncate cursor-pointer"
              href={`https://opensea.io/${transaction.sender.address}`}
              target="_blank"
            >
              {transaction.sender.address}
            </Link>
            <Link
              href={`https://opensea.io/${transaction.receiver.address}`}
              target="_blank"
              className="flex-1 truncate cursor-pointer"
            >
              {transaction.receiver.address}
            </Link>
            <div className="flex-1">{timeString}</div>
          </div>
        );
      })}
    </div>
  );
}

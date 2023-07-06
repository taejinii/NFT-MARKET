import Link from "next/link";
import { getTimeDifference } from "@/utils/getTimeDifference";
import { NFTTransAction } from "@/types/types";
import { SALE_HISTORY } from "@/constant/constant";
export default function SaleHistoy({ history }: { history: NFTTransAction }) {
  const { transactions = [] } = history;
  return (
    <div className="w-full overflow-auto font-bold max-h-80">
      <div className="sticky top-0 flex p-2 space-x-4 bg-white border-b-2 border-black">
        {SALE_HISTORY.map((title) => {
          return (
            <div key={title} className="flex-1 uppercase">
              {title}
            </div>
          );
        })}
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
              href={`/user/${transaction.sender.address}`}
            >
              {transaction.sender.address}
            </Link>
            <Link
              href={`/user/${transaction.receiver.address}`}
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

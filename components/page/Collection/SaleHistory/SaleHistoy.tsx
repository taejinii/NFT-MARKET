"use client";
import { getTimeDiffrence } from "@/utils/getTimeDifference";
interface TransActionType {
  action: string;
  sender: { address: string };
  price: { value: number } | null;
  receiver: { address: string };
  tx_hash: string;
  time: number;
}
interface TransActionProps {
  transactions: TransActionType[];
}

export default function SaleHistoy({ history }: { history: TransActionProps }) {
  const { transactions } = history;
  const directProfile = (contract: string) => [
    window.open(`https://opensea.io/${contract}`, "_blank"),
  ];
  return (
    <div className="w-full overflow-auto font-bold max-h-80">
      <div className="sticky top-0 flex p-2 space-x-4 bg-white border-b-2 border-black">
        <div className="flex-1">Event</div>
        <div className="flex-1">Price</div>
        <div className="flex-1">From</div>
        <div className="flex-1">To</div>
        <div className="flex-1">Date</div>
      </div>

      {transactions.map((transaction) => {
        const currentTime = Date.now();
        const transactionTime = transaction.time;
        const timeDif = currentTime - transactionTime;
        const timeString = getTimeDiffrence(timeDif);

        return (
          <div
            key={transaction.tx_hash}
            className="flex w-full p-2 space-x-4 border-b-2"
          >
            <div className="flex-1">{transaction.action}</div>
            <div className="flex-1">
              {transaction.price?.value}
              {transaction.price?.value ? "ETH" : ""}
            </div>
            <div
              className="flex-1 truncate cursor-pointer"
              onClick={() => directProfile(transaction.sender.address)}
            >
              {transaction.sender.address}
            </div>
            <div
              className="flex-1 truncate cursor-pointer"
              onClick={() => directProfile(transaction.receiver.address)}
            >
              {transaction.receiver.address}
            </div>
            <div className="flex-1">{timeString}</div>
          </div>
        );
      })}
    </div>
  );
}

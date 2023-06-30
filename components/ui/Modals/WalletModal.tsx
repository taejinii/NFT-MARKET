"use client";
import { useAppDispatch } from "@/store";
import { closeModal } from "@/store/modalSlice";
import { signIn } from "next-auth/react";
import { useAccount, useConnect, useEnsName } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useEffect } from "react";
import Image from "next/image";
export default function WalletModal() {
  const dispatch = useAppDispatch();
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect, isSuccess } = useConnect({
    connector: new InjectedConnector(),
  });
  useEffect(() => {
    if (isConnected) {
      dispatch(closeModal());
    }
  }, [dispatch, isConnected]);

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-[400px] m-auto bg-white h-[600px] drop-shadow-2xl rounded-2xl">
      <header className="sticky top-0 flex items-center justify-between w-full p-2 border-b-2">
        <h2>Connect a wallet</h2>
        <button onClick={() => dispatch(closeModal())} className="p-2 text-3xl">
          x
        </button>
      </header>

      <div className="flex flex-col items-center justify-center flex-grow">
        <button
          onClick={() => connect()}
          className="p-4 rounded-xl hover:bg-slate-200"
        >
          <span>MetaMask</span>
          <Image
            src={"/images/metamask.png"}
            alt="MetaMaskLogin"
            priority
            width={150}
            height={150}
          />
        </button>
      </div>
    </div>
  );
}

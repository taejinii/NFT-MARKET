"use client";
import { useAppDispatch } from "@/store";
import { closeModal } from "@/store/modalSlice";
import { signIn } from "next-auth/react";
import { useAccount, useConnect, useEnsName } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
export default function LoginModal() {
  const dispatch = useAppDispatch();
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-[400px] m-auto bg-white h-[600px] drop-shadow-2xl rounded-2xl">
      <header className="flex items-center justify-between w-full p-2 border-b-2">
        <h2>Login Modal</h2>
        <button onClick={() => dispatch(closeModal())} className="p-2">
          x
        </button>
      </header>
      <button onClick={() => connect()}>Connect Wallet</button>
    </div>
  );
}

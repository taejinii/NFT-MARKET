"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Wallet from "../../../public/icons/Wallet.svg";
import Image from "next/image";
export default function WalletConnectButton() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            className="hover:contrast-75"
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="max-w-sm p-1 rounded-full drop-shadow-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 "
                  >
                    <Wallet className="w-10 h-10 p-1 bg-white rounded-full fill-white " />
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }

              return (
                <div>
                  <button
                    onClick={openAccountModal}
                    className="relative w-12 h-12"
                  >
                    <Image
                      src="/images/azuki2.avif"
                      alt="Profile Image"
                      fill
                      priority
                      className="object-cover rounded-full drop-shadow-md"
                    />
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}

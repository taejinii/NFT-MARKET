import "@/styles/globals.css";
import Header from "@/components/ui/Header";
import Providers from "./provider";
import GlobalModal from "@/components/ui/Modals/GlobalModal";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  openGraph: {
    image: "/images/azuki2.avif",
  },
  title: "QWERO - NFT Market Place",
  description: "오직 나만의 NFT 를 소유하세요!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={inter.className}>
      <body>
        <Providers>
          <GlobalModal />
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}

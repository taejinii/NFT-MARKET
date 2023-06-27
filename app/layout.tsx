import "./globals.css";
import Header from "@/components/ui/Header";
import Providers from "./provider";

export const metadata = {
  title: "QWERO - NFT Market Place",
  description: "오직 나만의 NFT 를 소유하세요!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-sans">
        <Header />
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}

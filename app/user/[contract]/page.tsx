import { getUserInfo } from "@/api/UserAPI";
import UserInfo from "@/components/page/User/UserInfo";
import UserCollectionList from "@/components/page/User/UserCollectionList";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { contract: string };
}): Promise<Metadata> {
  const { contract } = params;
  const userInfo = await getUserInfo(contract);
  return {
    title: `${userInfo.assets[0].nft.owner_addresses} - Profile | QWERO`,
    description: `${userInfo.assets[0].nft.owner_addresses}님의 프로필 입니다.`,
    openGraph: {
      images: {
        url: userInfo.assets[0].nft.image,
        alt: userInfo.assets[0].nft.collection_name,
      },
      title: `${userInfo.assets[0].nft.owner_addresses} - Profile | QWERO`,
      description: `${userInfo.assets[0].nft.owner_addresses}님의 프로필 입니다.`,
      url: `/user/${contract}`,
    },
  };
}

export default async function UserPage({
  params,
}: {
  params: { contract: string };
}) {
  const { contract } = params;
  const userInfo = await getUserInfo(contract);
  return (
    <>
      <UserInfo userInfo={userInfo} />
      <UserCollectionList contract={params.contract} />
    </>
  );
}

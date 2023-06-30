import { getUserInfo } from "@/api/UserAPI";
import UserInfo from "@/components/page/User/UserInfo";
import UserCollectionList from "@/components/page/User/UserCollectionList";
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
      <UserCollectionList userInfo={userInfo} />
    </>
  );
}

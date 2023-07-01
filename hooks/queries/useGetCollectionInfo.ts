import { getCollectionInfo } from "@/api/CollectionAPI";
import { useQuery } from "@tanstack/react-query";
export const useGetCollectionInfo = (contract: string) => {
  const { data } = useQuery(["collectionInfo"], () =>
    getCollectionInfo(contract)
  );
  return { data };
};

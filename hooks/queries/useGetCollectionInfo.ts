import { getCollectionInfoOpenSea } from "@/api/CollectionAPI";
import { useQuery } from "@tanstack/react-query";
export const useGetCollectionInfo = (contract: string) => {
  const { data } = useQuery(["collectionInfo"], () =>
    getCollectionInfoOpenSea(contract)
  );
  return { data };
};

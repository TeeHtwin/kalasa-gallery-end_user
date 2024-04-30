import { fetchData } from "@/data/data";
import CollectionCard from "../cards/CollectionCard";
import { ListPage } from "@/types";

const Collection = async ({ query, currentPage }: ListPage) => {
  const collectionData = await fetchData(currentPage, query, "collection");

  return (
    <div
      data-testid="mocked-collection-card"
      className={`columns-2 lg:columns-3 gap-2 lg:gap-5 mt-5 lg:mt-10 w-full`}
    >
      {collectionData?.map((singleData: any) => (
        <CollectionCard key={singleData.id} info={singleData} />
      ))}
    </div>
  );
};

export default Collection;

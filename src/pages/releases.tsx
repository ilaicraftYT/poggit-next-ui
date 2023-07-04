import { useState } from "react";
import PluginCard from "@/components/PluginCard";
import useReleases from "@/lib/useReleases";
import { SimpleGrid, Pagination } from "@mantine/core";
import useSWR, { SWRResponse } from "swr";

export default function Releases() {
  const { isLoading, data, error } = useReleases("4");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  if (!isLoading) console.log(data);

  // Calculate the range of items to display based on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <main>
      {!isLoading && !error && (
        <Pagination
          total={data ? Math.ceil(data.length / itemsPerPage) : 0}
          value={currentPage}
          onChange={handlePageChange}
          size="md"
          radius="md"
          className="mb-4"
        />
      )}
      <SimpleGrid cols={4}>
        {isLoading && <PluginCard isSkeleton={true} />}
        {!isLoading &&
          !error &&
          currentItems &&
          currentItems.map((item, index) => (
            <PluginCard
              key={index}
              name={item.name}
              image={item.icon_url}
              author={
                item.producers.Collaborator
                  ? item.producers.Collaborator[0]
                  : item.repo_name.split("/")[0]
              }
              version={item.version}
              isPreRelease={item.is_pre_release}
              isFeatured={item.state === 6}
              score={item.score}
              downloads={item.downloads}
              submissionDate={item.submission_date}
            />
          ))}
        {error && <p>Error: res != 200</p>}
      </SimpleGrid>

      {!isLoading && !error && (
        <Pagination
          total={data ? Math.ceil(data.length / itemsPerPage) : 0}
          value={currentPage}
          onChange={handlePageChange}
          size="md"
          radius="md"
          className="mt-4"
        />
      )}
    </main>
  );
}

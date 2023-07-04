import useSWR from "swr"
import PluginData from "./iplugin";

const fetcher = async (input: RequestInfo | URL) => await fetch(input).then(res => res.json())

export default function useReleases(version?: "5" | "4" | "3" | "2") {
  const { isLoading, data, error } = useSWR<PluginData[]>("https://poggit.pmmp.io/releases.min.json?latest-only", fetcher)
  let orderedData = data;

  if (!isLoading && !error && data) {

    /* @ts-expect-error - We already check that */
    orderedData.sort((a, b) => {
      // Sort by "Featured" state first
      if (a.state === 6 && b.state !== 6) {
        return -1; // a comes before b
      }
      if (a.state !== 6 && b.state === 6) {
        return 1; // b comes before a
      }

      // Sort by "Official" state second
      if (a.is_official && !b.is_official) {
        return -1;
      }
      if (!a.is_official && b.is_official) {
        return 1;
      }

      // Sort by "More downloads" third
      if (a.downloads > b.downloads) {
        return -1;
      }
      if (a.downloads < b.downloads) {
        return 1;
      }

      // If none of the sorting conditions apply, maintain the original order
      return 0;
    });

    // Last filter by API version
    /* @ts-expect-error - We already check that */
    version ? orderedData = orderedData.filter((v) => v.api[0]?.from.startsWith(version) || v.api[0]?.to.startsWith(version)) : null;
  }

  return { isLoading, data: orderedData, error }
}
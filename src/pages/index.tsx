import Image from "next/image";
import { Text } from "@mantine/core";

export default function Home() {
  return (
    <main>
      <div className="md:px-4 lg:px-8">
        <Text className="md:mt-4 lg:mt-8 text-4xl text-center">
          Welcome to Poggit on Next.js!
        </Text>
        <Text className="mt-4 text-justify">
          This is a remastered version made in Next.js of Poggit, the official
          repository of plugins for PocketMine-MP. Here, server owners can
          download plugins with a remade, but still familiar UI. To avoid
          confusion (and because the API isn&apos;t enough), this version is
          read-only.
          <br />
          <br />
          <strong>Note:</strong> This is <b>NOT</b> the official website for
          Poggit. You can find the actual website by clicking
          &quot;Original&quot; on the header.
        </Text>
      </div>
    </main>
  );
}

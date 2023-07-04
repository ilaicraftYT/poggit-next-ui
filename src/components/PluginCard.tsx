import { Card, Skeleton, Group, Text, Badge, rem, Button } from "@mantine/core";
import {
  IconFlask,
  IconDiscountCheck,
  IconUser,
  IconGitCommit,
  IconStarFilled,
  IconStar,
  IconCloudDownload,
  IconCalendarTime,
} from "@tabler/icons-react";
import Image from "next/image";

export default function PluginCard({
  isSkeleton,
  image,
  version,
  author,
  name,
  isPreRelease,
  isFeatured,
  downloads,
  score,
  submissionDate,
}: {
  isSkeleton?: boolean;
  image?: string;
  version?: string;
  author?: string;
  name?: string;
  isPreRelease?: boolean;
  isFeatured?: boolean;
  score?: number | null;
  downloads?: number;
  submissionDate?: number;
}) {
  return (
    <Card padding="lg" shadow="sm" withBorder>
      <Card.Section className="p-2">
        {isSkeleton ? (
          <Skeleton circle height={48} className="block mx-auto" />
        ) : (
          <Image
            src={image ?? "https://poggit.pmmp.io/res/defaultPluginIcon3.png"}
            alt={`${name} logo`}
            width={48}
            height={48}
            className="block mx-auto"
          />
        )}
      </Card.Section>
      <Group position="apart" mt="md">
        {isSkeleton ? (
          <Skeleton height={15} width="40%" mb={2} />
        ) : (
          <Text weight={900}>{name}</Text>
        )}
        <div>
          {isSkeleton ? (
            <Skeleton height={10} width="30%" mt={8} mb={2} />
          ) : (
            <div>
              {isPreRelease && (
                <Badge
                  className="mt-2 mr-2"
                  color="red"
                  variant="light"
                  leftSection={<IconFlask width={15} height={15} />}
                >
                  Pre-release
                </Badge>
              )}
              {isFeatured && (
                <Badge
                  className="mt-2"
                  color="green"
                  variant="light"
                  leftSection={<IconDiscountCheck width={15} height={15} />}
                >
                  Featured
                </Badge>
              )}
            </div>
          )}
        </div>
      </Group>
      {isSkeleton ? (
        <Skeleton height={10} width="30%" className="mb-2" />
      ) : (
        <div className="flex mb-4">
          {score &&
            [...Array(5)].map((star, index) => {
              index += 1;
              if (index >= score) {
                return (
                  <IconStar
                    key={index}
                    width={15}
                    height={15}
                    className="mr-2"
                  />
                );
              }
              return (
                <IconStarFilled
                  key={index}
                  width={15}
                  height={15}
                  className="mr-2"
                />
              );
            })}
        </div>
      )}
      {isSkeleton ? (
        <Skeleton height={10} width="30%" className="mb-2" />
      ) : (
        <div className="flex">
          <IconGitCommit width={20} height={20} className="mr-2" />v{version}
        </div>
      )}
      {isSkeleton ? (
        <Skeleton height={10} width="30%" className="mb-2" />
      ) : (
        <div className="flex">
          <IconUser width={20} height={20} className="mr-2" />
          By: {author}
        </div>
      )}
      {isSkeleton ? (
        <Skeleton height={10} width="30%" className="mb-2" />
      ) : (
        <div className="flex">
          <IconCloudDownload width={20} height={20} className="mr-2" />
          Downloads: {downloads?.toLocaleString()}
        </div>
      )}
      {isSkeleton ? (
        <Skeleton height={10} width="30%" className="mb-2" />
      ) : (
        <div className="flex">
          <IconCalendarTime width={20} height={20} className="mr-2" />
          Since:{" "}
          {new Date((submissionDate ?? 1) * 1000).toLocaleDateString(
            undefined,
            {
              dateStyle: "medium",
            }
          )}
        </div>
      )}
      {isSkeleton ? (
        <Skeleton height={10} width="30%" className="mb-2" />
      ) : (
        <Button variant="light" color="blue" mt="md" radius="md" fullWidth>
          View
        </Button>
      )}
    </Card>
  );
}

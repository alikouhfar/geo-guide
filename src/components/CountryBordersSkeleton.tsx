import { Skeleton } from "@mantine/core";

export default function CountryBordersSkeleton() {
  return (
    <div className="grid grid-cols-4 gap-3">
      <Skeleton height={45} width="100%" />
      <Skeleton height={45} width="100%" />
      <Skeleton height={45} width="100%" />
      <Skeleton height={45} width="100%" />
    </div>
  );
}

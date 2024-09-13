import { Search } from "@/components/search";
import { TravelPackages } from "@/components/travel-packagelist ";
import { TravelSkeleton } from "@/components/travelskeleton";
import { Wrapper } from "@/components/wrapper";
import { Suspense } from "react";

export default async function Home({
  searchParams: { destination, departure },
}: {
  searchParams: {
    departure: string | undefined;
    destination: string | undefined;
  };
}) {
  console.log(destination);
  console.log(departure);
  return (
    <main key={Math.random()} className="min-h-screen">
      <Wrapper>
        <Search />
        <Suspense fallback={<TravelSkeleton />}>
          <TravelPackages departure={departure} destination={destination} />
        </Suspense>
      </Wrapper>
    </main>
  );
}

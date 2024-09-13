import { TravelDetail } from "@/components/detail";
import { Wrapper } from "@/components/wrapper";
import { apiCall } from "@/lib/api";
import { notFound } from "next/navigation";
import React from "react";

async function getData(slug: string) {
  const data = await apiCall(`travel-packages/${slug}`, "populate=*");
  if (!data) {
    notFound();
  }

  return data;
}

const TravelDetailPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const data = await getData(slug);
  return (
    <Wrapper>
      <TravelDetail data={data} />
    </Wrapper>
  );
};
export default TravelDetailPage;

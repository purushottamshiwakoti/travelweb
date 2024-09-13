import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

import { apiCall } from "@/lib/api";
import { format } from "date-fns/format";

async function getData(
  destination: string | undefined,
  departure: string | undefined
) {
  let query = `populate=image&filters[departure_date][$gt]=${format(
    new Date(),
    "yyyy-MM-dd"
  )}`;

  if (destination && departure) {
    query += `&filters[destination][$eq]=${encodeURIComponent(
      destination
    )}&filters[departure_date][$eq]=${encodeURIComponent(departure)}`;
  }

  const data = await apiCall("travel-packages", query);
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 100000000);
  // });
  return data;
}

export const TravelPackages = async ({
  destination,
  departure,
}: {
  departure: string | undefined;
  destination: string | undefined;
}) => {
  const data = await getData(destination, departure);

  return (
    <>
      <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-10">
        {data.length ? (
          data.map((item: any, i: number) => {
            return (
              <Link key={i} href={`${item.id}`}>
                <Card className="hover:scale-105 duration-200 ease-in-out cursor-pointer">
                  <CardHeader>
                    <CardDescription>
                      <Image
                        src={`${
                          process.env.NEXT_PUBLIC_STRAPI_URL +
                          item.attributes.image.data.attributes.url
                        }`}
                        alt="mage"
                        width={1200}
                        height={720}
                      />
                    </CardDescription>
                    <CardTitle className="pt-10">
                      {item.attributes.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <p>
                        Duration:{" "}
                        <span className="font-bold">
                          {item.attributes.duration} days
                        </span>{" "}
                      </p>
                      <p>
                        Departure Date:{" "}
                        <span className="font-bold">
                          {format(
                            item.attributes.departure_date,
                            "dd MMMM yyyy"
                          )}
                        </span>{" "}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="w-full ">
                      <div className="flex items-center justify-between w-full">
                        <h2>
                          Destination:{" "}
                          <span className="font-bold">
                            {item.attributes.destination}
                          </span>
                        </h2>
                        <p>
                          Slots Available:{" "}
                          <span className="font-bold">
                            {item.attributes.available_slots}
                          </span>{" "}
                        </p>
                      </div>
                      <div className="flex items-center justify-center w-full">
                        <Button
                          className="mt-5 "
                          variant={"outline"}
                          size={"lg"}
                        >
                          View Detail
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            );
          })
        ) : (
          <div className="flex flex-col  items-center justify-center space-y-4 w-[80vw] h-[80vh]">
            <p className="font-bold text-2xl text-center text-destructive ">
              Search No Result
            </p>
            <p className="text-muted-foreground">
              We are sorry. We cannot find any matches for your search term.
            </p>
            <Link href={"/"}>
              <Button>Return Back</Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

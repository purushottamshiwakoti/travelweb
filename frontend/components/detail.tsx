import parse from "html-react-parser";
import Image from "next/image";
import { Button } from "./ui/button";

import { format } from "date-fns/format";

export const TravelDetail = ({ data }: { data: any }) => {
  return (
    <>
      <div className="">
        <h1 className="text-primary font-semibold text-3xl text-center">
          {data.attributes.title}
        </h1>
        <Image
          src={`${
            process.env.NEXT_PUBLIC_STRAPI_URL +
            data.attributes.image.data.attributes.url
          }`}
          alt="mage"
          width={900}
          height={500}
          className="my-5"
        />
        <div className="lg:flexlg: gap-10">
          <div className="lg:flex items-center gap-10 mt-4">
            <h2>
              Destination:{" "}
              <span className="font-bold">{data.attributes.destination}</span>
            </h2>
            <p>
              Slots Available:{" "}
              <span className="font-bold">
                {data.attributes.available_slots}
              </span>{" "}
            </p>
            <p>
              Duration:{" "}
              <span className="font-bold">{data.attributes.duration}</span>{" "}
            </p>
            <p>
              Destination:{" "}
              <span className="font-bold">{data.attributes.destination}</span>{" "}
            </p>
            <p>
              Depature Date:{" "}
              <span className="font-bold">
                {format(data.attributes.departure_date, "dd MMMM yyyy")}
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="mt-5">
          <Button variant={"default"} size={"lg"}>
            Book Now
          </Button>
        </div>
        <div className="grid lg:grid-cols-2">
          <div className="lg:prose-lg prose">
            {parse(data.attributes.description)}
          </div>
        </div>
        <div className="mt-5">
          <Button variant={"default"} size={"lg"}>
            Book Now
          </Button>
        </div>
      </div>
    </>
  );
};

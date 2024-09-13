import { LoaderCircle } from "lucide-react";
export const TravelSkeleton = () => {
  return (
    <div className="w-full h-[20vh]   flex items-center justify-center">
      <div>
        <LoaderCircle className="animate-spin" />
      </div>
    </div>
  );
};

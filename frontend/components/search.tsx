"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SearchForm } from "./search-form";

export const Search = () => {
  return (
    <Card className="mb-10 lg:mx-[20%] ">
      <CardContent className="  p-2 ">
        <SearchForm />
      </CardContent>
    </Card>
  );
};

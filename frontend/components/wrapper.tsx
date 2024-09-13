import React from "react";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="lg:px-[10%] px-[3%] py-10">{children}</div>;
};

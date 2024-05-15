import DefaultLayout from "@/layouts/Default";
import type { FC } from "react";

const MarketingLayout: FC<Readonly<{ children: React.ReactNode }>> = ({
  children,
}) => {
  return <DefaultLayout>{children}</DefaultLayout>;
};

export default MarketingLayout;

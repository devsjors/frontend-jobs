import Footer from "@/components/Containers/Footer";
import NavBar from "@/components/Containers/NavBar";
import type { FC } from "react";

const MarketingLayout: FC<Readonly<{ children: React.ReactNode }>> = ({
  children,
}) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default MarketingLayout;

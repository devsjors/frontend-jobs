import Footer from "@/components/Containers/Footer";
import NavBar from "@/components/Containers/NavBar";
import type { FC } from "react";
import styles from "./index.module.css";

const DefaultLayout: FC<Readonly<{ children: React.ReactNode }>> = ({
  children,
}) => {
  return (
    <>
      <NavBar />

      <div className={styles.defaultLayout}>{children}</div>

      <Footer />
    </>
  );
};

export default DefaultLayout;

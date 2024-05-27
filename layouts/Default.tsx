import WithFooter from "@/components/withFooter";
import WithNavBar from "@/components/withNavBar";
import type { FC } from "react";
import styles from "./index.module.css";

const DefaultLayout: FC<Readonly<{ children: React.ReactNode }>> = ({
  children,
}) => {
  return (
    <>
      <WithNavBar />

      <div className={styles.defaultLayout}>{children}</div>

      <WithFooter />
    </>
  );
};

export default DefaultLayout;

import type { FC } from "react";
import styles from "./index.module.css";

const BaseLayout: FC<Readonly<{ children: React.ReactNode }>> = ({
  children,
}) => {
  return (
    <>
      <div className={styles.baseLayout}>{children}</div>
    </>
  );
};

export default BaseLayout;

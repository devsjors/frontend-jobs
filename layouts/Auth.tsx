import type { FC } from "react";
import styles from "./index.module.css";

const AuthLayout: FC<Readonly<{ children: React.ReactNode }>> = ({
  children,
}) => {
  return (
    <>
      <div className={styles.authLayout}>{children}</div>
    </>
  );
};

export default AuthLayout;

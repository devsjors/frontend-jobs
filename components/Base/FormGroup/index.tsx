import { cn } from "@/lib/utils";
import { type FC } from "react";
import styles from "./index.module.css";

type VariantProps = {};

type FormGroupProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps & {
    error?: string;
  };

const FormGroup: FC<Readonly<FormGroupProps>> = ({
  className,
  error,
  children,
  ...props
}) => {
  return (
    <div className={cn(className)} {...props}>
      {children}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default FormGroup;

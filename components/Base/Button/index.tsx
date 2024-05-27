import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";
import { Fragment, type FC } from "react";
import styles from "./index.module.css";

type VariantProps = {
  variant?: "default";
  size?: "default";
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps & {
    asChild?: boolean;
    block?: boolean;
    loading?: boolean;
  };

const BaseButton: FC<Readonly<ButtonProps>> = ({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  block = false,
  loading = false,
  children,
  ...props
}) => {
  const Comp = asChild ? Fragment : "button";

  return (
    <Comp
      className={cn(
        styles.base,
        {
          [styles.block]: block,
        },
        styles[`variant--${variant}`],
        styles[`size--${size}`],
        className
      )}
      {...props}
    >
      {loading && <LoaderCircle className={styles.loader} />}
      {children}
    </Comp>
  );
};

export default BaseButton;

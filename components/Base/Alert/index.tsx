import { cn } from "@/lib/utils";
import React, { FC } from "react";
import styles from "./index.module.css";

type VariantProps = {
  variant?: "solid" | "subtle";
  color?: "white" | "red";
};

type AlertProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps & {
    title: string;
    description?: string;
  };

const BaseAlert: FC<Readonly<AlertProps>> = ({
  title,
  description,
  variant = "solid",
  color = "white",
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        styles.base,
        styles[`color--${color}--${variant}`],
        className
      )}
      {...props}
    >
      <p className={styles.title}>{title}</p>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default BaseAlert;

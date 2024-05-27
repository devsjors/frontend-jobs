import { cn } from "@/lib/utils";
import { FC } from "react";
import styles from "./index.module.css";

type VariantProps = {};

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  VariantProps & {};

const BaseLabel: FC<Readonly<LabelProps>> = ({ className, ...props }) => {
  return <label className={cn(styles.base, className)} {...props} />;
};

export default BaseLabel;

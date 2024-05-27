import { cn } from "@/lib/utils";
import { FC } from "react";
import styles from "./index.module.css";

type VariantProps = {};

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps & {};

const BaseInput: FC<Readonly<InputProps>> = ({ className, ...props }) => {
  return <input className={cn(styles.base, className)} {...props} />;
};

export default BaseInput;

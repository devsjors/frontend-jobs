import AuthLayout from "@/layouts/Auth";
import type { FC } from "react";

const AuthGroupLayout: FC<Readonly<{ children: React.ReactNode }>> = ({
  children,
}) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default AuthGroupLayout;

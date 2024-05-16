import AuthSignInForm from "@/components/Containers/Auth/SignIn/Form";
import type { FC } from "react";

const LoginPage: FC = async () => {
  return (
    <main>
      <AuthSignInForm />
    </main>
  );
};

export default LoginPage;

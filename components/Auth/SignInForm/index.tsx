import BaseButton from "@/components/Base/Button";
import BaseInput from "@/components/Base/Input";
import BaseLabel from "@/components/Base/Label";
import type { FC } from "react";

type AuthSignInFormProps = React.FormHTMLAttributes<HTMLFormElement>;

const AuthSignInForm: FC<Readonly<AuthSignInFormProps>> = ({ ...props }) => {
  return (
    <form {...props}>
      <div>
        <BaseLabel htmlFor="email">Email</BaseLabel>
        <BaseInput id="email" name="email" type="email" />
      </div>

      <div>
        <BaseLabel htmlFor="password">Password</BaseLabel>
        <BaseInput id="password" name="password" type="password" />
      </div>

      <BaseButton block>Sign in</BaseButton>
    </form>
  );
};

export default AuthSignInForm;

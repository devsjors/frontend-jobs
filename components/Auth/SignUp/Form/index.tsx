import BaseButton from "@/components/Base/Button";
import BaseInput from "@/components/Base/Input";
import BaseLabel from "@/components/Base/Label";
import type { FC } from "react";

type AuthSignUpFormProps = React.FormHTMLAttributes<HTMLFormElement>;

const AuthSignUpForm: FC<Readonly<AuthSignUpFormProps>> = ({ ...props }) => {
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

      <BaseButton block>Sign up</BaseButton>
    </form>
  );
};

export default AuthSignUpForm;

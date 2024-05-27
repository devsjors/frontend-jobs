"use client";

import { signin } from "@/actions/auth";
import BaseButton from "@/components/Base/Button";
import BaseInput from "@/components/Base/Input";
import BaseLabel from "@/components/Base/Label";
import type { FC } from "react";
import { useFormStatus } from "react-dom";

type AuthSignInFormProps = React.FormHTMLAttributes<HTMLFormElement>;

const AuthSignInForm: FC<Readonly<AuthSignInFormProps>> = ({ ...props }) => {
  return (
    <form action={signin} {...props}>
      <div>
        <BaseLabel htmlFor="email">Email</BaseLabel>
        <BaseInput id="email" name="email" type="email" />
      </div>

      <div>
        <BaseLabel htmlFor="password">Password</BaseLabel>
        <BaseInput id="password" name="password" type="password" />
      </div>

      <SubmitButton>Sign in</SubmitButton>
    </form>
  );
};

type SubmitButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const SubmitButton: FC<Readonly<SubmitButtonProps>> = ({ ...props }) => {
  const { pending } = useFormStatus();

  return <BaseButton block loading={pending} disabled={pending} {...props} />;
};

export default AuthSignInForm;

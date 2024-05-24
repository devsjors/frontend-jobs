"use client";

import { signup } from "@/actions/auth";
import BaseButton from "@/components/Base/Button";
import FormGroup from "@/components/Base/FormGroup";
import BaseInput from "@/components/Base/Input";
import BaseLabel from "@/components/Base/Label";
import type { FC } from "react";
import { useFormState, useFormStatus } from "react-dom";

type AuthSignUpFormProps = React.FormHTMLAttributes<HTMLFormElement>;

const AuthSignUpForm: FC<Readonly<AuthSignUpFormProps>> = ({ ...props }) => {
  const [formState, formAction] = useFormState(signup, {
    success: false,
    errors: {},
  });

  return (
    <form action={formAction} {...props}>
      <FormGroup error={formState?.errors?.email?.[0]}>
        <BaseLabel htmlFor="email">Email</BaseLabel>
        <BaseInput id="email" name="email" type="email" />
      </FormGroup>

      <FormGroup error={formState?.errors?.password?.[0]}>
        <BaseLabel htmlFor="password">Password</BaseLabel>
        <BaseInput id="password" name="password" type="password" />
      </FormGroup>

      <FormGroup error={formState?.errors?.confirmPassword?.[0]}>
        <BaseLabel htmlFor="confirm-password">Confirm password</BaseLabel>
        <BaseInput
          id="confirm-password"
          name="confirmPassword"
          type="password"
        />
      </FormGroup>

      <SubmitButton>Sign up</SubmitButton>
    </form>
  );
};

type SubmitButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const SubmitButton: FC<Readonly<SubmitButtonProps>> = ({ ...props }) => {
  const { pending } = useFormStatus();

  return <BaseButton block loading={pending} disabled={pending} {...props} />;
};

export default AuthSignUpForm;

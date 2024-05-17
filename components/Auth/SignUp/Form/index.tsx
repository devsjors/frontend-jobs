import type { FC } from "react";

type AuthSignUpFormProps = React.FormHTMLAttributes<HTMLFormElement>;

const AuthSignUpForm: FC<Readonly<AuthSignUpFormProps>> = ({ ...props }) => {
  return (
    <form {...props}>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </div>

      <button>Sign Up</button>
    </form>
  );
};

export default AuthSignUpForm;

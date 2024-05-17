import type { FC } from "react";

type AuthSignInFormProps = React.FormHTMLAttributes<HTMLFormElement>;

const AuthSignInForm: FC<Readonly<AuthSignInFormProps>> = ({ ...props }) => {
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

      <button>Sign In</button>
    </form>
  );
};

export default AuthSignInForm;

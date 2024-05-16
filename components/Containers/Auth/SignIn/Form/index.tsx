import { signIn } from "@/auth";
import type { FC } from "react";

const AuthSignInForm: FC = () => {
  return (
    <form
      action={async (formData) => {
        "use server";

        await signIn("credentials", {
          formData: formData,
          redirectTo: "/",
        });
      }}
    >
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

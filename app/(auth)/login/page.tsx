import AuthSignInForm from "@/components/Auth/SignIn/Form";
import { createClient } from "@/lib/supabase/server";
import { Command } from "lucide-react";
import Link from "next/link";
import type { FC } from "react";
import styles from "./index.module.css";

const LoginPage: FC = async () => {
  return (
    <main>
      <Link href="/">
        <Command className={styles.logo} />
      </Link>

      <AuthSignInForm
        className={styles.form}
        action={async (formData) => {
          "use server";

          const supabase = createClient();

          const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.get("email") as string,
            password: formData.get("password") as string,
          });

          console.log(data, error);
        }}
      />

      <p className={styles.signUpLink}>
        Don&apos;t have an account? <Link href="/register">Sign up</Link>
      </p>
    </main>
  );
};

export default LoginPage;

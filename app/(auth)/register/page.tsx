import AuthSignUpForm from "@/components/Auth/SignUp/Form";
import { createClient } from "@/lib/supabase/server";
import { Command } from "lucide-react";
import Link from "next/link";
import type { FC } from "react";
import styles from "./index.module.css";

const RegisterPage: FC = async () => {
  return (
    <main>
      <Link href="/">
        <Command className={styles.logo} />
      </Link>

      <AuthSignUpForm
        className={styles.form}
        action={async (formData) => {
          "use server";

          const supabase = createClient();

          const { data, error } = await supabase.auth.signUp({
            email: formData.get("email") as string,
            password: formData.get("password") as string,
          });

          console.log(data, error);
        }}
      />

      <p className={styles.signInLink}>
        Already have an account? <Link href="/login">Sign in</Link>
      </p>
    </main>
  );
};

export default RegisterPage;

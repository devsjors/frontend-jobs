import { signUp } from "@/actions/auth";
import AuthSignUpForm from "@/components/Auth/SignUpForm";
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

      <AuthSignUpForm className={styles.form} action={signUp} />

      <p className={styles.signInLink}>
        Already have an account? <Link href="/login">Sign in</Link>
      </p>
    </main>
  );
};

export default RegisterPage;

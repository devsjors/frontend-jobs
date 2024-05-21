import { signIn } from "@/actions/auth";
import AuthSignInForm from "@/components/Auth/SignIn/Form";
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

      <AuthSignInForm className={styles.form} action={signIn} />

      <p className={styles.signUpLink}>
        Don&apos;t have an account? <Link href="/register">Sign up</Link>
      </p>
    </main>
  );
};

export default LoginPage;

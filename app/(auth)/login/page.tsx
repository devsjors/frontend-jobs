import AuthSignInForm from "@/components/Auth/SignInForm";
import BaseAlert from "@/components/Base/Alert";
import { Command } from "lucide-react";
import Link from "next/link";
import type { FC } from "react";
import styles from "./index.module.css";

const LoginPage: FC<
  Readonly<{ searchParams: { [key: string]: string | string[] | undefined } }>
> = ({ searchParams }) => {
  const error = Array.isArray(searchParams.error)
    ? searchParams.error[0]
    : searchParams.error;

  return (
    <main>
      <Link href="/">
        <Command className={styles.logo} />
      </Link>

      <div className={styles.wrapper}>
        {error && <BaseAlert title={error} color="red" variant="subtle" />}
        <AuthSignInForm className={styles.form} />
      </div>

      <p className={styles.signUpLink}>
        Don&apos;t have an account? <Link href="/register">Sign up</Link>
      </p>
    </main>
  );
};

export default LoginPage;

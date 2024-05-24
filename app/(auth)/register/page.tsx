import AuthSignUpForm from "@/components/Auth/SignUpForm";
import BaseAlert from "@/components/Base/Alert";
import { Command } from "lucide-react";
import Link from "next/link";
import type { FC } from "react";
import styles from "./index.module.css";

const RegisterPage: FC<
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
        <AuthSignUpForm className={styles.form} />
      </div>

      <p className={styles.signInLink}>
        Already have an account? <Link href="/login">Sign in</Link>
      </p>
    </main>
  );
};

export default RegisterPage;

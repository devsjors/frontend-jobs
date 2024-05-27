"use client";

import { signOut } from "@/actions/auth";
import { type User } from "@supabase/supabase-js";
import { Command, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, type FC } from "react";
import styles from "./index.module.css";

const navInteractionIcons = {
  open: <Menu className={styles.navInteractionIcon} />,
  close: <X className={styles.navInteractionIcon} />,
};

const NavBar: FC<Readonly<{ user: User | null }>> = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-y-hidden", isMenuOpen);
  }, [isMenuOpen]);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.container}>
          <div className={styles.logo}>
            <Link href="/" aria-label="Home">
              <Command />
              <span>Frontend Jobs</span>
            </Link>
          </div>

          <div className={isMenuOpen ? styles.navMobile : styles.nav}>
            <ul className={styles.navItems}>
              <li>Nav item X</li>
              <li>Nav item Y</li>
              <li>Nav item Z</li>
            </ul>
          </div>

          <div className={styles.authButtonsAndMobileItemsToggler}>
            {!user && (
              <>
                <Link href="/login">Sign in</Link>

                <Link href="/register" className={styles.signUpLink}>
                  Sign up
                </Link>
              </>
            )}

            {user && (
              <div>
                <p>UserDropdown</p>
                <button type="button" onClick={() => signOut()}>
                  Sign out
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={styles.mobileItemsToggler}
            >
              {navInteractionIcons[isMenuOpen ? "close" : "open"]}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;

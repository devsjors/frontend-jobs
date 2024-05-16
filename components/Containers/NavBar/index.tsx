"use client";

import { Command, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, type FC } from "react";
import styles from "./index.module.css";

const navInteractionIcons = {
  open: <Menu className={styles.navInteractionIcon} />,
  close: <X className={styles.navInteractionIcon} />,
};

const NavBar: FC = () => {
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

          <div className={isMenuOpen ? styles.navItemsMobile : styles.navItems}>
            <ul>
              <li>Nav item X</li>
              <li>Nav item Y</li>
              <li>Nav item Z</li>
            </ul>
          </div>

          <div className={styles.authButtonsAndMobileItemsToggler}>
            <Link href="/login">Sign in</Link>

            <Link href="/sign-up" className={styles.signUpLink}>
              Sign up
            </Link>

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

"use client";

import { cn } from "@/lib/utils";
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
    <header className={styles.header}>
      <nav className={styles.container}>
        <div className={styles.logoAndMobileItemsToggler}>
          <Link className={styles.logoWrapper} href="/" aria-label="Home">
            <Command />
            <span>Frontend Jobs</span>
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={styles.mobileItemsToggler}
          >
            {navInteractionIcons[isMenuOpen ? "close" : "open"]}
          </button>
        </div>

        <div className={cn(styles.main, isMenuOpen ? "flex" : "hidden")}>
          <ul className={styles.navItems}>
            <li>Nav item X</li>
            <li>Nav item Y</li>
            <li>Nav item Z</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

"use client";
import Link from "next/link";
import { HomeIcon, MenuIcon, CloseIcon } from "@/assets/icons";
import { useState } from "react";
import s from "./navbar.module.css";
import { JSX } from "react";

type Page = {
  href: string;
  label: string | JSX.Element;
};

export default function Navbar() {
  const pages: Page[] = [
    {
      href: "/",
      label: <HomeIcon />,
    },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
  ];

  const [sidebarVisibility, setSidebarVisibility] = useState(false);

  return (
    <nav className={s.nav}>
      <ul className={`${s.sidebar} ${sidebarVisibility ? s.sidebarOpen : ""}`}>
        <li
          className={s.navItem}
          style={{ padding: "0 16px" }}
          onClick={() => {
            setSidebarVisibility(false);
          }}
        >
          <CloseIcon color="white" />
        </li>
        {pages.map((page, index) => {
          if (index === 0) return null;
          return (
            <li key={index} className={s.navItem}>
              <Link
                className={s.navLink}
                href={page.href}
                onClick={() => setSidebarVisibility(false)}
              >
                {page.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <ul className={s.navList}>
        {pages.map((page, index) => {
          const styles = s.navItem + (index !== 0 ? " " + s.hideOnMobile : "");
          return (
            <li key={index} className={styles}>
              <Link
                className={s.navLink}
                href={page.href}
                onClick={() => {
                  if (index === 0) {
                    setSidebarVisibility(false);
                  }
                }}
              >
                {page.label}
              </Link>
            </li>
          );
        })}
        <li
          className={s.navItem + " " + s.menuIcon}
          style={{ padding: "0px 16px" }}
          onClick={() => {
            setSidebarVisibility(true);
          }}
        >
          <MenuIcon color="white" />
        </li>
      </ul>
    </nav>
  );
}

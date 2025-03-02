"use client";
import Link from "next/link";
import s from "./styles.module.css";

export default function Navbar() {
  const pages = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects"}
  ];
  return (
    <nav className={s.navBar}>
      <ul className={s.navEntries}>
        {pages.map((page, index) => {
          return (
            <li key={index} className={s.navEntry}>
              <Link className={s.navLink} href={page.href}>
                {page.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

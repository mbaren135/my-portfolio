"use client";
import { Footer } from "@/components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Michael Baren</h1>
      </main>
      <Footer />
    </div>
  );
}

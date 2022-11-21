import Link from "next/link";
import styles from "./mainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Culinaria</Link>
      </div>
      <nav className={styles.nav}>
        <ul className="">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/clues">Clues</Link>
          </li>
          <li>
            <Link href="/plattes">Plattes</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

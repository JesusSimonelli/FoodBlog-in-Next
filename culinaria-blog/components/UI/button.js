import Link from "next/link";
import styles from "./button.module.css";

export default function Button(props) {
  if (props.link) {
    return <Link className={styles.button} href={props.link}>{props.children}</Link>;
  }
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

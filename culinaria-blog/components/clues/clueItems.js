import Image from "next/image";
import styles from "./clueItems.module.css";

export default function ClueItems(props) {
  const { id, description, title, image } = props;
  return (
    <li className={styles.item}>
      <Image
        src={"/" + image}
        alt={title}
        width={250}
        height={250}
        priority={true}
      />
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </li>
  );
}

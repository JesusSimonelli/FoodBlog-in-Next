import Image from "next/image";
import styles from "./booksItems.module.css";

export default function BookItems(props) {
  const { id, title, image, resume } = props;
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{resume}</p>
      </div>
      <Image
        src={"/" + image}
        alt={title}
        priority={true}
        width={350}
        height={350}
      />
    </li>
  );
}

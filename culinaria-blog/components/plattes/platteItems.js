import Image from "next/image";

import Button from "../UI/button";
import styles from "./platteItems.module.css";

export default function PlatteItems(props) {
  const { title, id, image, resume } = props;
  const exploreLink = `/plattes/${id}`;
  return (
    <li className={styles.item}>
      <Image
        src={"/" + image}
        alt={title}
        width={250}
        height={250}
        priority={true}
      />
      <h2>{title}</h2>
      <p>{resume}</p>
      <div className={styles.actions}>
        <Button link={exploreLink}>Explore Link</Button>
      </div>
    </li>
  );
}

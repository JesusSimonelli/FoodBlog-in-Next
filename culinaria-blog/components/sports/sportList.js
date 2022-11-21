import SportItems from "./sportItems";
import styles from "./sportList.module.css";

export default function SportList(props) {
  const { sports } = props;
  return (
    <ul className={styles.list}>
      {sports.map((sport) => (
        <SportItems
          key={sport.id}
          id={sport.id}
          title={sport.name}
          resume={sport.resume}
        />
      ))}
    </ul>
  );
}

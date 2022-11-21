import ClueItems from "./clueItems";
import styles from './clueList.module.css'

export default function ClueList(props) {
  const {clues } = props;
  return (
    <ul className={styles.list}>
      {clues.map((clue) => (
        <ClueItems
          key={clue.id}
          id={clue.id}
          title={clue.name}
          image={clue.image}
          description={clue.description}
        />
      ))}
    </ul>
  );
}

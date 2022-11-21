import styles from './plattesList.module.css'
import PlatteItems from "./platteItems";

export default function PlattesList(props) {
  const { plattes } = props;
  return (
    <ul className={styles.list}>
      {plattes.map((platte) => (
        <PlatteItems
          key={platte.id}
          id={platte.id}
          title={platte.name}
          image={platte.image}
          resume={platte.resume}
        />
      ))}
    </ul>
  );
}


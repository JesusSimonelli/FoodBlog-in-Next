import { useState } from "react";
import ClueList from "../clues/clueList";
import styles from "./search-bar.module.css";
export default function SearchBar(props) {
  const { placeholder, clues } = props;
  const [filteredData, setFilteredData] = useState(clues);
  
 
  function handleFilter(event) {
    const searchWord = event.target.value;
    const newFilter = clues.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    setFilteredData(newFilter)
  }
  return (
    <div className={styles.search}>
      <div className={styles.searchInput}>
        <input type="text" placeholder={placeholder} onChange={handleFilter} />
      </div>
      <div className={styles.dataResult}>
        <ClueList clues={filteredData} />
      </div>
    </div>
  );
}

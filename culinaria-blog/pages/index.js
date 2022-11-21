import Background from "../components/background/background";
import BooksList from "../components/books/booksList";
import ClueList from "../components/clues/clueList";
import PlattesList from "../components/plattes/plattesList";
import SportList from "../components/sports/sportList";
import { getAllBooks } from "../helpers/books-api";
import { getAllClues, getFeaturedClues } from "../helpers/clues-api";
import { getAllSports } from "../helpers/exercises-api";
import { getAllPlattes } from "../helpers/plattes-api";

import styles from '../styles/styles.module.css'

export default function Home(props) {
  return (
    <div>
      <Background />
      <section className={styles.content}>
        <div className={styles.plates}>
          <PlattesList plattes={props.plattes} />
        </div>
        <div className={styles.clues}>
          <ClueList clues={props.clues} />
        </div>
        <div className={styles.sports}>
          <SportList sports={props.sports} />
        </div>
        <div className={styles.books}>
          <BooksList books={props.books}/>
        </div>

      </section>
    </div>
  );
}
export async function getStaticProps() {
  const plattes = await getAllPlattes();
  const clues = await getFeaturedClues();
  const sports = await getAllSports();
  const books = await getAllBooks()

  return {
    props: {
      plattes: plattes,
      clues: clues,
      sports: sports,
      books: books
    },
    revalidate: 60,
  };
}

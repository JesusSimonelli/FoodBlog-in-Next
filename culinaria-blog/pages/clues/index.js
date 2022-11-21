import React from "react";
import ClueList from "../../components/clues/clueList";
import SearchBar from "../../components/search/search-bar";
import { getAllClues } from "../../helpers/clues-api";

export default function Clues(props) {
  const { clues } = props;
  return (
    <section>
      <SearchBar placeholder='Search for a clue' clues={clues} />
      
    </section>
  );
}

export async function getStaticProps() {
  const clues = await getAllClues();
  return {
    props: {
      clues: clues,
    },
  };
}

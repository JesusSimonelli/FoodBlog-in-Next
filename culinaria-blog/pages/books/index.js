import React from "react";
import BooksList from "../../components/books/booksList";
import { getAllBooks } from "../../helpers/books-api";

export default function Books(props) {
  const { books } = props;
  return (
    <div>
      <BooksList books={books} />
    </div>
  );
}

export async function getStaticProps() {
  const books = await getAllBooks();

  return {
    props: {
      books: books,
    },
  };
}

import React from 'react'
import BookItems from './bookItems'
import styles from './booksList.module.css'

export default function BooksList(props) {
  const {books} = props
  return (
    <ul className={styles.list}>
      {books.map(book => (
        <BookItems
        key={book.id}
        id={book.id}
        title={book.name}
        image={book.image}
        resume={book.resume}/>
      ))}
    </ul>
  )
}

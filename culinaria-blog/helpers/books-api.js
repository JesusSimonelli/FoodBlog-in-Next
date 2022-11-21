export async function getAllBooks() {
  const response = await fetch(
    "https://healthfood-dd7ee-default-rtdb.firebaseio.com/books.json"
  );
  const data = await response.json();

  const books = [];

  for (const key in data) {
    books.push({
      id: key,
      ...data[key],
    });
  }
  return books;
}

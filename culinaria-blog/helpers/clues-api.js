export async function getAllClues() {
  const response = await fetch(
    "https://healthfood-dd7ee-default-rtdb.firebaseio.com/clues.json"
  );
  const data = await response.json();

  const clues = [];

  for (const key in data) {
    clues.push({
      id: key,
      ...data[key],
    });
  }

  return clues;
}


export async function getFeaturedClues(){
  const allClues = await getAllClues()
  return allClues.filter(clue => clue.isFeatured)
}

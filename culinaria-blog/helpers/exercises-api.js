export async function getAllSports() {
  const response = await fetch(
    "https://healthfood-dd7ee-default-rtdb.firebaseio.com/exercises.json"
  );
  const data = await response.json();

  const sports = [];

  for (const key in data) {
    sports.push({
      id: key,
      ...data[key],
    });
  }
  return sports;
}

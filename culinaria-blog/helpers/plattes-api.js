export async function getAllPlattes() {
  const response = await fetch(
    "https://healthfood-dd7ee-default-rtdb.firebaseio.com/plattes.json"
  );
  const data = await response.json();

  const plattes = [];

  for (const key in data) {
    plattes.push({
      id: key,
      ...data[key],
    });
  }

  return plattes;
}

export async function getFeaturedPlattes(){
  const allPlattes = await getAllPlattes()

  return allPlattes.filter(platte => platte.isFeatured)
}

export async function getPlattesById(id) {
  const allPlattes = await getAllPlattes();

  return allPlattes.find((platte) => platte.id === id);
}

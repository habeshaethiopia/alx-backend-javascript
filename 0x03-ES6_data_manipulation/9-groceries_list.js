export default function groceriesList() {
  const groceries = new Map();
  const dict = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const [key, value] of Object.entries(dict)) {
    groceries.set(key, value);
  }
  return groceries;
}

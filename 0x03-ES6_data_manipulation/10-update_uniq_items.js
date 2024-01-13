export default function updateUniqueItems(items) {
  items.forEach((key, value) => {
    if (key === 1) {
      items.set(value, 100);
    }
  });
}

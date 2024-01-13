export default function updateUniqueItems(items) {
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }
  items.forEach((key, value) => {
    if (key === 1) {
      items.set(value, 100);
    }
  });
}

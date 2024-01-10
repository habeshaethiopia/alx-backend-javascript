export default function hasValuesFromArray(s, arr) {
  return arr.every((v) => s.has(v));
}

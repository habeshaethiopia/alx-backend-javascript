// the loop should iterate over the array
export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    const value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}

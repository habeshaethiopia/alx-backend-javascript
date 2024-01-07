export default function iterateThroughObject(reportWithIterator) {
  let s = '';
  for (const employee of reportWithIterator) {
    s += `${employee} | `;
  }
  return s.slice(0, s.length - 3);
}

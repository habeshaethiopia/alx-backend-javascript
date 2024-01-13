export default function cleanSet(s, str) {
  const clean = [];
  if (
    !s
    && !str
    && !(s instanceof Set)
    && typeof str !== 'string'
  ) {
    return '';
  }
  for (const val of s) {
    if (val.startsWith(str) && typeof val === 'string') {
      clean.push(val.substr(str.length));
    }
  }
  return clean.join('-');
}

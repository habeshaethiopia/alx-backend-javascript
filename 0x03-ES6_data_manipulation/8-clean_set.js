export default function cleanSet(s, str) {
  const clean = [];
  if (!s && !str && !(s instanceof Set) && typeof str !== 'string') {
    return '';
  }
  for (const value of s.values()) {
    if (typeof value === 'string' && value.startsWith(str)) {
      const valueSubStr = value.substring(str.length);

      if (valueSubStr && valueSubStr !== value) {
        clean.push(valueSubStr);
      }
    }
  }
  return clean.join('-');
}

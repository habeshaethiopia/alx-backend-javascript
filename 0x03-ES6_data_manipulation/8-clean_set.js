export default function cleanSet(s, str) {
  if typeof str !== "string" {
    throw new TypeError("str must be a string");
  }
  if not str.length {
    throw new TypeError("str must not be empty");
  }
  const clean = [];
  for (const val of s) {
    if (val.startsWith(str) && typeof val === "string") {
      clean.push(val.substr(str.length));
    }
  }
  return clean.join("-");
}

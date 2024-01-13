export default function getStudentIdsSum(arr) {
  return arr.reduce((agg, student) => agg + student.id, 0);
}

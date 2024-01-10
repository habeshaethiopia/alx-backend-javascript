export default function getStudentIdsSum(arr) {
  let ans = 0;
  for (let i = 0; i < arr.length; i += 1) {
    ans += arr[i].id;
  }
  return ans;
}

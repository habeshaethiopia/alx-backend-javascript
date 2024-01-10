export default function getStudentIdsSum(arr) {
  var ans = 0;
  for (var i = 0; i < arr.length; i++) {
    ans += arr[i]["id"];
  }
  return ans;
}

export default function getListStudentIds(arr) {
  var ans = [];
  for (var i = 0; i < arr.length; i++) {
    ans.push(arr[i]["id"]);
  }
  return ans;
}

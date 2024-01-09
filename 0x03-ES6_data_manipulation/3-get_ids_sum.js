export default function getStudentsByLocation(arr, loc)
{
    var ans = [];
    for (var i = 0; i < arr.length; i++) {
      if arr[i]['location']==loc:
          ans.push(arr[i]);

    }
    return ans
}

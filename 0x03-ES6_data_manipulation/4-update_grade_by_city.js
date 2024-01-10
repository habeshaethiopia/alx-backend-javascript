export default function updateStudentGradeByCity(arr, city, newGrades) {
  const ext = arr.filter((a) => a.location === city);
  const nw = ext.map((student) => {
    for (const stu of newGrades) {
      if (student.id === stu.studentId) {
        student.grade = stu.grade; // eslint-disable-line no-param-reassign
      }
    }
    if (student.grade === undefined) {
      student.grade = 'N/A'; // eslint-disable-line no-param-reassign
    }
    return student;
  });
  return nw;
}

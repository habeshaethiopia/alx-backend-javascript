export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const s1: Student = {
  firstName: "abcd",
  lastName: "Doe",
  age: 18,
  location: "Addis ababa",
};
const s2: Student = {
  firstName: "xyz",
  lastName: "Doe",
  age: 29,
  location: "gonder",
};

const studentsList: Array<Student> = [s1, s2];
export const renderTable = (studentsList: Array<Student>): void => {
  // create table tag
  const table = document.createElement("table");
  const headRow = document.createElement("tr");
  table.insertAdjacentElement("beforeend", headRow);

  // insert headers
  headRow.insertAdjacentHTML("beforeend", "<th>FirstName</th>");
  headRow.insertAdjacentHTML("beforeend", "<th>Location</th>");

  for (const student of studentsList) {
    const studentRow = document.createElement("tr");
    studentRow.insertAdjacentHTML("beforeend", `<td>${student.firstName}</td>`);
    studentRow.insertAdjacentHTML("beforeend", `<td>${student.location}</td>`);
    table.insertAdjacentElement("beforeend", studentRow);
  }

  document.body.insertAdjacentElement("beforeend", table);
};

renderTable(studentsList);

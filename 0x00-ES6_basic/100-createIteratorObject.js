export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees);
  let allEmployees = [];
  for (const employee of employees) {
    allEmployees = allEmployees.concat(employee);
  }
  return allEmployees;
}

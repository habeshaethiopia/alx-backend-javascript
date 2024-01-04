export default function createEmployeesObject(departmentName) {
	return {
		allEmployees: employeesList,
		getNumberOfDepartments(employeesList) {
			return Object.keys(employeesList).length;
		},
	};
}

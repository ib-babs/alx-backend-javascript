export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments: (allEmps) => Object.keys(allEmps).length,
  };
}

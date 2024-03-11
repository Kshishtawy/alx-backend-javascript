export default function createReportObject(employeesList) {
  return {
    allEmployees: { employeesList },
    getgetNumberOfDepartments(obj) {
      return Object.keys(obj).length;
    },
  };
}

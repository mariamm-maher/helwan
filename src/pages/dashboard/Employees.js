import EmployeesTable from "../../components/dashboard/EmployeeTable";
import SearchBar from "../../components/shared/SearchBar";
function Employees() {
  return (
    <div div className="m-30">
      <SearchBar />
      <EmployeesTable />
    </div>
  );
}

export default Employees;

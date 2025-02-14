import MangersTable from "../../components/dashboard/ManagersTable";
import SearchBar from "../../components/shared/SearchBar";

function Managers() {
  return (
    <div className="m-30">
      <SearchBar />
      <MangersTable />
    </div>
  );
}

export default Managers;

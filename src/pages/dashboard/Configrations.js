import AdminsTable from "../../components/dashboard/Adminstable";
import SearchBar from "../../components/shared/SearchBar";

function Configrations() {
  return (
    <div className="m-30">
      {" "}
      <SearchBar />
      <AdminsTable />{" "}
    </div>
  );
}

export default Configrations;

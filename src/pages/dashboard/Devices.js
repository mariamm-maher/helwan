import DevicesTable from "../../components/dashboard/DevicesTable";
import SearchBar from "../../components/shared/SearchBar";
function Devices() {
  return (
    <div className="m-30">
      {" "}
      <SearchBar />
      <DevicesTable />
    </div>
  );
}

export default Devices;

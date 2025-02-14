import AttendanceTable from "../../components/dashboard/AttendenceTable";
import DownloadReportsButton from "../../components/dashboard/DownloadButton";
import SearchBar from "../../components/shared/SearchBar";

function Attendence() {
  return (
    <div className="mt-20">
      <div className="p-4 flex justify-between">
        <SearchBar />
        <DownloadReportsButton />
      </div>
      <AttendanceTable />
    </div>
  );
}

export default Attendence;

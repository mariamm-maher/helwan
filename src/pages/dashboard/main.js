import SmallTable from "../../components/dashboard/Smalltable";
import Sections from "../../components/dashboard/Sections";
import { useQuery } from "@tanstack/react-query";
import { fetchFourInitialTables } from "../../Services/AdminServices";
import Loader from "../../components/shared/Loader";

function Main() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["initialTablesData"],
    queryFn: fetchFourInitialTables,
  });

  if (isLoading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  const managersColumns = [
    {
      header: "رقم ",
      accessorKey: "rowNumber",
      cell: ({ row }) => <span>{row.index + 1}</span>,
    },
    { header: "الاسم", accessorKey: "fullName" },
    { header: "القسم", accessorKey: "departmentName" },
  ];

  const devicesColumns = [
    {
      header: "رقم ",
      accessorKey: "rowNumber",
      cell: ({ row }) => <span>{row.index + 1}</span>,
    },
    {
      accessorKey: "device_name",
      header: " اسم الجهاز",
    },
    {
      accessorKey: "iP_Address",
      header: "ip address",
    },
    {
      accessorKey: "port",
      header: "Port",
    },
  ];

  const adminsColumns = [
    {
      header: "رقم ",
      accessorKey: "rowNumber",
      cell: ({ row }) => <span>{row.index + 1}</span>,
    },
    { header: "الاسم", accessorKey: "fullName" },
    { header: "القسم", accessorKey: "departmentName" },
  ];

  const employeesColumns = [
    {
      header: "رقم ",
      accessorKey: "rowNumber",
      cell: ({ row }) => <span>{row.index + 1}</span>,
    },
    { header: "الاسم", accessorKey: "fullName" },
    { header: "القسم", accessorKey: "departmentName" },
    { header: "تاريخ التعيين ", accessorKey: "hiringDate" },
  ];

  return (
    <main>
      <div>
        <Sections />
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 p-4">
          <div className="bg-white shadow-sm rounded-lg p-4">
            <h1 className="text-xl font-bold mb-4">الموظفين</h1>
            <SmallTable columns={employeesColumns} data={data.employees} />
          </div>
          <div className="bg-white shadow-sm rounded-lg p-4">
            <h1 className="text-xl font-bold mb-4">المديرين</h1>
            <SmallTable columns={managersColumns} data={data.managers} />
          </div>

          <div className="bg-white shadow-sm rounded-lg p-4">
            <h1 className="text-xl font-bold mb-4">الاجهزة</h1>
            <SmallTable columns={devicesColumns} data={data.devices} />
          </div>

          <div className="bg-white shadow-sm rounded-lg p-4">
            <h1 className="text-xl font-bold mb-4"> مديرين النظام</h1>
            <SmallTable columns={adminsColumns} data={data.admins} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;

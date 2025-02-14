import { motion } from "framer-motion";
import Pagination from "../shared/pagination";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useQuery } from "@tanstack/react-query";
import { fetchDataForManagers } from "../../Services/AdminServices";
import Loader from "../shared/Loader";
import { useState } from "react";
const columns = [
  {
    header: "رقم ",
    accessorKey: "rowNumber",
    cell: ({ row }) => <span>{row.index + 1}</span>,
  },
  { header: "الاسم", accessorKey: "fullName" },
  { header: "القسم", accessorKey: "departmentName" },
  { header: "الوظيفة", accessorKey: "subDepartmentName" },
  {
    header: "العمليات",
    accessorKey: "actions",
    cell: ({ row }) => (
      <div className="flex space-x-2">
        <button
          // onClick={() => handleEdit(row.original)}
          className="px-2 py-1 bg-[#343573] text-white rounded hover:bg-blue-600"
        >
          تعديل
        </button>
        <button
          // onClick={() => handleDelete(row.original)}
          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          حذف
        </button>
      </div>
    ),
  },
];

function MangersTable() {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const { data, isLoading } = useQuery({
    queryKey: ["MangerstableData", pageIndex, pageSize],
    queryFn: () => fetchDataForManagers({ pageIndex, pageSize }),
    keepPreviousData: true,
  });

  const table = useReactTable({
    data: data?.rows || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
  });

  const handlePageChange = (newPageIndex) => {
    setPageIndex(newPageIndex);
  };

  // Handle page size changes
  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
    setPageIndex(0); // Reset to the first page
  };

  if (isLoading) return <Loader />;

  return (
    <div
      className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 min-h-screen mt-16"
      dir="rtl"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden rounded-lg shadow-2xl"
      >
        <table className="w-full border-collapse bg-white">
          <thead
            style={{
              background:
                "linear-gradient(to left, #27285d, #3a3b7d 70%, #b38e19 90%, #ffcc00 100%)",
            }}
          >
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="p-4 text-right text-white font-semibold uppercase text-sm border-b border-blue-500"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row, index) => (
              <motion.tr
                key={row.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
                className="hover:bg-gray-50 transition-all duration-200"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="p-4 text-sm text-gray-700 border-b border-gray-200 text-right"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
      <Pagination
        pageIndex={pageIndex}
        pageSize={pageSize}
        pageCount={data?.totalCount ? Math.ceil(data.totalCount / pageSize) : 1}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </div>
  );
}

export default MangersTable;

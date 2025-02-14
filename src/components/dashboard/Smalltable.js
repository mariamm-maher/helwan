import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

function SmallTable({ columns, data }) {
  // Create a table instance
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div
      className="overflow-x-auto bg-gradient-to-r from-gray-50 to-gray-100"
      dir="rtl"
    >
      <table className="w-full border-collapse bg-white shadow-sm">
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
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50 transition-colors">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="p-3 text-sm text-gray-700 border-b border-gray-200"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SmallTable;

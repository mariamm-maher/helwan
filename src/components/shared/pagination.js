import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const Pagination = ({
  pageIndex,
  pageSize,
  pageCount,
  onPageChange,
  onPageSizeChange,
}) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-6 p-4 bg-white shadow-md rounded-lg">
      {/* First Page */}
      <button
        onClick={() => onPageChange(0)}
        disabled={pageIndex === 0}
        className={`p-2 rounded-lg ${
          pageIndex === 0
            ? "text-gray-300 cursor-not-allowed"
            : "text-blue-600 hover:bg-blue-100"
        }`}
      >
        <ChevronsRight className="w-5 h-5" />
      </button>

      {/* Previous Page */}
      <button
        onClick={() => onPageChange(pageIndex - 1)}
        disabled={pageIndex === 0}
        className={`p-2 rounded-lg ${
          pageIndex === 0
            ? "text-gray-300 cursor-not-allowed"
            : "text-blue-600 hover:bg-blue-100"
        }`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Page Indicator */}
      <span className="flex items-center gap-2 text-gray-700">
        <span>صفحة</span>
        <strong className="px-2 py-1 bg-gray-100 rounded-md">
          {pageIndex + 1} / {pageCount || 1}
        </strong>
      </span>

      {/* Next Page */}
      <button
        onClick={() => onPageChange(pageIndex + 1)}
        disabled={pageIndex + 1 >= (pageCount || 1)}
        className={`p-2 rounded-lg ${
          pageIndex + 1 >= (pageCount || 1)
            ? "text-gray-300 cursor-not-allowed"
            : "text-blue-600 hover:bg-blue-100"
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Last Page */}
      <button
        onClick={() => onPageChange((pageCount || 1) - 1)}
        disabled={pageIndex + 1 >= (pageCount || 1)}
        className={`p-2 rounded-lg ${
          pageIndex + 1 >= (pageCount || 1)
            ? "text-gray-300 cursor-not-allowed"
            : "text-blue-600 hover:bg-blue-100"
        }`}
      >
        <ChevronsLeft className="w-5 h-5" />
      </button>

      {/* Page Size Selector */}
      <select
        value={pageSize}
        onChange={(e) => onPageSizeChange(Number(e.target.value))}
        className="p-2 border border-gray-300 rounded-md bg-white shadow-sm"
      >
        {[5, 10, 30, 50].map((size) => (
          <option key={size} value={size}>
            عرض {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Pagination;

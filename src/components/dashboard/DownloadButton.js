import { useMutation } from "@tanstack/react-query";
import { saveAs } from "file-saver"; // A library to handle file downloads

function DownloadReportsButton() {
  const downloadReportsMutation = useMutation({
    mutationFn: async ({ startDate, endDate }) => {
      const url = `https://localhost:7268/api/Reports?StartDate=${startDate}&EndDate=${endDate}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to download reports");
      }

      // Extract filename from the content-disposition header
      const contentDisposition = response.headers.get("content-disposition");
      const filename = contentDisposition
        ? contentDisposition.split("filename=")[1].replace(/['"]/g, "")
        : "AttendanceReports.zip";

      // Convert the response to a Blob
      const blob = await response.blob();

      // Return the Blob and filename for download
      return { blob, filename };
    },
    onSuccess: ({ blob, filename }) => {
      // Use file-saver to trigger the download
      saveAs(blob, filename);
    },
    onError: (error) => {
      console.error("Error downloading reports:", error);
      alert("Failed to download reports. Please try again.");
    },
  });

  const handleDownload = () => {
    // Define the date range for the report
    const startDate = "2024-12-01";
    const endDate = "2024-12-10";

    // Trigger the mutation
    downloadReportsMutation.mutate({ startDate, endDate });
  };

  return (
    <button
      onClick={handleDownload}
      disabled={downloadReportsMutation.isPending}
      style={{
        backgroundColor: "#27285d", // Primary color
        color: "#ffffff", // White text
        padding: "0.75rem 1.5rem", // Padding
        borderRadius: "0.5rem", // Rounded corners
        fontWeight: "600", // Bold text
        fontSize: "1rem", // Text size
        border: "none", // Remove default border
        cursor: "pointer", // Pointer cursor
        transition: "background-color 0.3s ease, transform 0.2s ease", // Smooth transitions
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = "#3a3b7d"; // Darker shade on hover
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = "#27285d"; // Restore original color
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = "scale(0.98)"; // Slight scale down on click
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "scale(1)"; // Restore scale
      }}
      disabledStyle={{
        backgroundColor: "#a0a0a0", // Gray when disabled
        cursor: "not-allowed", // Disabled cursor
      }}
    >
      {downloadReportsMutation.isPending ? "جارى التحميل ..." : "تصدير"}
    </button>
  );
}

export default DownloadReportsButton;

import { motion } from "framer-motion";
import NavBar from "../../components/dashboard/NavBar";
import { Outlet } from "react-router-dom";
function Dashboard() {
  return (
    <motion.div
      className=" bg-gray-100 min-h-screen"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      dir="rtl"
    >
      <NavBar />
      <Outlet />
    </motion.div>
  );
}

export default Dashboard;

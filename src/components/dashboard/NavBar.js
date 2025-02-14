import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaUserShield,
  FaLaptop,
  FaSignOutAlt,
  FaBell,
  FaBars,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import Logo from "../shared/logo";

const navItems = [
  { icon: FaTachometerAlt, label: "لوحة التحكم", path: "/dashboard" },
  { icon: FaUsers, label: "إدارة الموظفين", path: "/dashboard/employees" },
  { icon: FaUserShield, label: "ادارة المديرين", path: "/dashboard/managers" },
  { icon: FaLaptop, label: "إدارة الأجهزة", path: "/dashboard/devices" },
  { icon: FaLaptop, label: " الحضور", path: "/dashboard/attendence" },
  { icon: FaLaptop, label: "إعدادات النظام", path: "/dashboard/settings" },
  { icon: FaUsers, label: "الإجازات", path: "/dashboard/leaves" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  function handleLogout() {
    logout();
    navigate("/");
  }
  return (
    <div className="bg-[#27285d] p-4 rounded-b-3xl h-18 shadow-md flex justify-between items-center text-white fixed top-0 right-0 left-0">
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        <Logo size={12} />
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Navigation Items */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row gap-2 bg-[#3A3B7D] rounded-full py-1 px-4 border border-[#a58317] custom-shadow absolute md:relative top-16 md:top-0 right-4 md:right-0`}
      >
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end
            className={({ isActive }) =>
              `flex items-center px-3 py-2 text-sm font-medium rounded-full text-white transition-all duration-300 ${
                isActive
                  ? "bg-[#27285d]"
                  : "hover:bg-[#4C4D8E] focus:bg-[#4C4D8E]"
              }`
            }
            aria-label={item.label}
            onClick={() => setMenuOpen(false)}
          >
            <item.icon className="w-5 h-5 ml-2" />
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Profile and Actions */}
      <div className="relative flex items-center gap-4 bg-[#3A3B7D] rounded-full p-1">
        {/* Profile Section */}
        <div
          className="relative"
          onMouseEnter={() => setProfileOpen(true)}
          onMouseLeave={() => setProfileOpen(false)}
        >
          <motion.img
            src="./images/image.png"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-[#FBE4CC] hover:scale-110 transition-transform duration-300"
          />
          {profileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-12 left-0 bg-[#3A3B7D] p-4 rounded-lg shadow-lg flex flex-col gap-2"
            >
              <button
                type="button"
                className="flex items-center text-sm font-medium text-white bg-[#4C4D8E] px-4 py-2 rounded-full hover:bg-[#a58317] transition-colors duration-300"
                aria-label="View Profile"
              >
                <FaUser className="w-5 h-5 mr-2" />
                الملف الشخصي
              </button>
              <button
                type="button"
                className="flex items-center text-sm font-medium text-white bg-[#4C4D8E] px-4 py-2 rounded-full hover:bg-[#a58317] transition-colors duration-300"
                aria-label="Logout"
                onClick={handleLogout}
              >
                <FaSignOutAlt className="w-5 h-5 mr-2" />
                تسجيل الخروج
              </button>
            </motion.div>
          )}
        </div>

        {/* Notifications Section */}
        <motion.button
          type="button"
          className="relative text-white hover:text-[#FBE4CC]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Notifications"
          onClick={() => setNotificationsOpen(!notificationsOpen)}
        >
          <FaBell className="w-6 h-6" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            3
          </span>
        </motion.button>

        {/* Notifications Dropdown */}
        {notificationsOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-12 left-0 bg-[#3A3B7D] p-4 rounded-lg shadow-lg w-48"
          >
            <p className="text-sm text-white">🔔 لديك 3 إشعارات جديدة</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

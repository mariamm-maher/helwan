import { motion } from "framer-motion";
import {
  FaUsers,
  FaChalkboardTeacher,
  FaRegCalendarAlt,
  FaCogs,
} from "react-icons/fa";

const cardData = [
  { title: "إجمالي الموظفين", count: 550, icon: FaUsers },
  { title: "إجمالي المديرين", count: 55, icon: FaChalkboardTeacher },
  { title: "طلبات الاجازة", count: 120, icon: FaRegCalendarAlt },
  { title: "اجمالي الاجهزة", count: 300, icon: FaCogs },
];

const Sections = () => {
  return (
    <div className="mt-20">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {cardData.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center border border-[#b38e19] cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-gray-700 font-medium text-lg mb-2">
                {item.title}
              </h3>
              <motion.div
                className="flex items-center gap-2 text-[#b38e19] text-3xl font-bold"
                whileHover={{ y: -5 }}
              >
                <Icon className="text-4xl transition-colors duration-300 hover:text-[#ffcc00]" />
                {item.count}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Sections;

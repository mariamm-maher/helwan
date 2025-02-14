import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
function Button({ children }) {
  const navigate = useNavigate();
  return (
    <motion.button
      className="mt-2 px-10 py-4 border-2 border-[#b38e19] text-[#b38e19] rounded-none font-semibold hover:bg-[#b38e19] hover:text-white transition-all duration-500 ease-in-out transform shadow-lg relative overflow-hidden"
      style={{
        borderImage: "linear-gradient(45deg, #b38e19, #ffd700) 1",
        borderImageSlice: 1,
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1.5 }}
      whileHover={{ scale: 1.1, boxShadow: "0 0 20px #b38e19" }}
      whileTap={{ scale: 0.9 }}
      onClick={() => navigate("/login")}
    >
      {/* Glowing border animation */}
      <motion.span
        className="absolute inset-0 border-2 border-[#b38e19] opacity-0"
        animate={{ opacity: [0, 1, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Continuous subtle pulse animation */}
      <motion.span
        className="absolute inset-0 bg-[#b38e19] opacity-0"
        animate={{ opacity: [0, 0.1, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      {children} {/* Render the children here */}
    </motion.button>
  );
}

export default Button;

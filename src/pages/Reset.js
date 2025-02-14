import { motion } from "framer-motion";
import { Background } from "../components/shared/Background";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Reset() {
  const [ssn, setSsn] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();
  const { resetuser } = useAuth();
  const handleReset = async (e) => {
    e.preventDefault();
    resetuser(
      { ssn, newEmail, newPassword },
      {
        onSuccess: () => {
          navigate("/");
        },
      }
    );
  };
  return (
    <Background>
      <motion.div
        className="bg-[#27285d]/70 p-8 shadow-2xl w-full backdrop-blur-xl rounded-lg max-w-md"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleReset}>
          <div className="flex justify-center mb-8 text-white">
            يجب تعيين بريد الكتروني و كلمة مرور
          </div>
          <div className="mb-6">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-white"
            >
              الرقم القومي
            </label>
            <input
              id="ssn"
              name="snn"
              placeholder="أدخل رقمك القومي "
              className="mt-1 block w-full px-4 py-2 border-2 border-[#b38e19] bg-transparent text-white focus:outline-none focus:border-[#ffd700] rounded-lg"
              required
              onChange={(e) => setSsn(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              بريد الكتروني
            </label>
            <input
              id="email"
              name="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="mt-1 block w-full px-4 py-2 border-2 border-[#b38e19] bg-transparent text-white focus:outline-none focus:border-[#ffd700] rounded-lg"
              required
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              كلمة مرور
            </label>
            <input
              // type="password"
              id="password"
              name="password"
              placeholder="أدخل كلمة المرور"
              className="mt-1 block w-full px-4 py-2 border-2 border-[#b38e19] bg-transparent text-white focus:outline-none focus:border-[#ffd700] rounded-lg"
              required
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <motion.button
            type="submit"
            className="w-full px-4 py-2 border-2 text-[#b38e19] font-semibold bg-transparent hover:bg-gradient-to-r hover:from-[#b38e19] hover:to-[#ffd700] hover:text-white transition-all duration-300 ease-in-out shadow-lg rounded-lg"
            style={{
              borderImage: "linear-gradient(45deg, #b38e19, #ffd700) 1",
              borderImageSlice: 1,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            تعيين
          </motion.button>
        </form>
      </motion.div>
    </Background>
  );
}

export default Reset;

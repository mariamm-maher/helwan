import { motion } from "framer-motion";
import { Background } from "../components/shared/Background";
import Logo from "../components/shared/logo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, isLoading, error } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(
      { email, password },
      {
        onSuccess: () => {
          navigate("/dashboard");
        },
        onError: (error) => {
          if (error.type === "Redirect") {
            navigate("/reset");
          }
        },
      }
    );
  };

  return (
    <Background>
      <motion.div
        className="min-h-screen flex items-center justify-center p-4 w-full max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-primary/50 p-8 shadow-2xl w-full backdrop-blur-xl rounded-lg"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-8">
            {/* <Logo size={32} /> */}
          </div>
          {error && ""}
          <form onSubmit={handleSubmit}>
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
                className="mt-1 block w-full px-4 py-2 border-2 border-accent bg-transparent text-white focus:outline-none focus:border-accent rounded-lg"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                type="password"
                id="password"
                name="password"
                placeholder="أدخل كلمة المرور"
                className="mt-1 block w-full px-4 py-2 border-2 border-accent bg-transparent text-white focus:outline-none focus:border-accent rounded-lg"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-4 py-2 border-2 text-accent font-semibold bg-transparent hover:bg-gradient-to-r hover:from-accent hover:to-accent hover:text-white transition-all duration-300 ease-in-out shadow-lg rounded-lg"
              style={{
                borderImage: "linear-gradient(45deg, #B0890F, #B0890F) 1",
                borderImageSlice: 1,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? "جارى تسجيل الدخول ..." : "تسجيل دخول"}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </Background>
  );
}

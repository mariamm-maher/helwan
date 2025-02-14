import { motion } from "framer-motion";

function Logo({ size = 32 }) {
  // Default size is 64 (w-64 h-64)
  return (
    <motion.svg
      viewBox="0 0 100 100" // Adjust based on your SVG's viewBox
      className={`w-${size} h-${size} mb-6`} // Use the size prop to control width and height
      initial={{ scale: 0, rotate: -180, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      transition={{
        duration: 2,
        ease: "anticipate",
        rotate: { type: "spring", stiffness: 50, damping: 10 },
        scale: { type: "spring", stiffness: 100, damping: 10 },
      }}
    >
      {/* SVG Path Animation */}
      <motion.path
        d="M10 10 L90 10 L90 90 L10 90 Z" // Replace with your logo's path data
        fill="none"
        stroke="#b38e19"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      {/* Embedded Logo Image */}
      <motion.image
        href="./images/Helwan-logo.png" // Use `href` for embedding images in SVG
        x="20" // Adjust position (x, y) and size (width, height)
        y="20"
        width="60"
        height="60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }} // Delay the image fade-in
      />
    </motion.svg>
  );
}

export default Logo;

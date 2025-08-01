import { motion } from "framer-motion";
export default function Motion({ children }) {
  return (
    <motion.div whileHover={{ scale: 1.12 }} transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  );
}

import { motion } from "framer-motion";
import useMagnetic from "../hooks/useMagnetic";

export default function MagneticButton({ children, className = "inline-block" }) {
  const { ref, offset, onMouseMove, onMouseLeave } = useMagnetic(0.3);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

import { motion } from "framer-motion";
function AnimatedPage({ children }) {
  const animations = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };
  return (
    <div className="w-full h-full">
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default AnimatedPage;

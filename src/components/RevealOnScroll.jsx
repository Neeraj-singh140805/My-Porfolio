import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const RevealOnScroll = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 100, scale: 0.9, rotateX: -20, rotateY: 10 },
        visible: { opacity: 1, y: 0, scale: 1, rotateX: 0, rotateY: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1], delay: 0.1 }}
      style={{ perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

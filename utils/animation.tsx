"use client";

import { motion, useInView, UseInViewOptions } from "framer-motion";
import { useRef, ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  fullWidth?: boolean;
  viewport?: UseInViewOptions;
};

export const FadeIn = ({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "up",
  fullWidth = false,
  viewport = { once: true, margin: "-50px" }
}: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, viewport);

  const getInitial = () => {
    switch (direction) {
      case "up": return { opacity: 0, y: 40 };
      case "down": return { opacity: 0, y: -40 };
      case "left": return { opacity: 0, x: 40 };
      case "right": return { opacity: 0, x: -40 };
      case "none": return { opacity: 0 };
      default: return { opacity: 0, y: 40 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : getInitial()}
      transition={{ duration: 0.7, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      style={{ width: fullWidth ? "100%" : "auto" }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ children, className = "", delay = 0 }: { children: ReactNode, className?: string, delay?: number }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ staggerChildren: 0.1, delayChildren: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScaleOnHover = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    className={className}
  >
    {children}
  </motion.div>
);

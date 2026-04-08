import { ReactNode } from "react";
import { type Easing, motion } from "framer-motion";

export interface FadeUpProps {
  children: ReactNode;
  duration: number;
  delay?: number;
  whileInView?: boolean;
  className?: string;
}

export default function FadeUp({
  children,
  duration,
  delay,
  whileInView = false,
  className,
}: FadeUpProps) {
  const animation = {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: "easeInOut" as Easing,
      delay,
    },
  };
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={whileInView ? animation : undefined}
      animate={!whileInView ? animation : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}

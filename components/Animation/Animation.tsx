"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Animation({ children }: Props) {
  return (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
      {children}
    </motion.div>
  );
}

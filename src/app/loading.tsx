import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505]">
      <div className="relative">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-secondary font-black">C</span>
        </div>
      </div>
    </div>
  );
}

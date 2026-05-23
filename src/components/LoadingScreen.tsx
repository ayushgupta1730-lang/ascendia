"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 2.2,
        duration: 0.6,
      }}
      className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-white"
    >

      {/* CONTENT */}

      <div className="flex flex-col items-center">

        {/* LOGO */}

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-r from-indigo-500 to-purple-500 text-4xl font-black text-white shadow-2xl"
        >
          A
        </motion.div>

        {/* BRAND */}

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
          className="mt-8 text-5xl font-black tracking-tight text-slate-900"
        >
          Ascendia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.7,
            duration: 0.5,
          }}
          className="mt-3 text-lg text-slate-500"
        >
          Navigate your future with confidence.
        </motion.p>

        {/* LOADING BAR */}

        <div className="mt-10 h-2 w-64 overflow-hidden rounded-full bg-slate-200">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
          />

        </div>

      </div>
    </motion.div>
  );
}
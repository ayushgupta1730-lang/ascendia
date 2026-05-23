"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white px-6 py-20">

      {/* BACKGROUND GLOW */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.08),transparent_25%)]"></div>

      <div className="relative mx-auto max-w-7xl">

        {/* TOP */}

        <div className="grid gap-16 lg:grid-cols-4">

          {/* BRAND */}

          <div className="lg:col-span-2">

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block"
            >

              <h2 className="text-4xl font-black tracking-tight text-slate-900">
                Ascendia
              </h2>

            </motion.div>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Navigate your future with confidence through AI-powered
              career intelligence, personalized roadmaps, internship tracking,
              and modern student analytics.
            </p>

            {/* SOCIALS */}

            <div className="mt-8 flex items-center gap-4">

              <motion.div
                whileHover={{ y: -4 }}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl bg-slate-100 text-xl transition hover:bg-indigo-100"
              >
                🌐
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl bg-slate-100 text-xl transition hover:bg-indigo-100"
              >
                💼
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl bg-slate-100 text-xl transition hover:bg-indigo-100"
              >
                🚀
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl bg-slate-100 text-xl transition hover:bg-indigo-100"
              >
                🤖
              </motion.div>

            </div>

          </div>

          {/* LINKS */}

          <div>

            <h3 className="text-lg font-bold text-slate-900">
              Platform
            </h3>

            <div className="mt-6 space-y-4">

              <a
                href="#dashboard"
                className="block text-slate-600 transition hover:text-indigo-600"
              >
                Dashboard
              </a>

              <a
                href="#mentor"
                className="block text-slate-600 transition hover:text-indigo-600"
              >
                AI Mentor
              </a>

              <a
                href="#roadmaps"
                className="block text-slate-600 transition hover:text-indigo-600"
              >
                Roadmaps
              </a>

              <a
                href="#features"
                className="block text-slate-600 transition hover:text-indigo-600"
              >
                Features
              </a>

            </div>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="text-lg font-bold text-slate-900">
              Contact
            </h3>

            <div className="mt-6 space-y-4 text-slate-600">

              <p>
                support@ascendia.ai
              </p>

              <p>
                Bengaluru, India
              </p>

              <p>
                AI-Native Career Platform
              </p>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row">

          <p className="text-sm text-slate-500">
            © 2026 Ascendia. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-500">

            <button className="transition hover:text-indigo-600">
              Privacy Policy
            </button>

            <button className="transition hover:text-indigo-600">
              Terms of Service
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
}
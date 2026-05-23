"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden px-6 pt-32 pb-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT CONTENT */}

        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 shadow-sm">
            <span className="text-sm font-medium text-indigo-700">
              AI-Powered Career Intelligence Platform
            </span>
          </div>

          <h1 className="max-w-2xl text-6xl font-black leading-tight tracking-tight text-slate-900">
            Navigate your future with
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              {" "}confidence.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Ascendia helps students discover career paths, build personalized
            roadmaps, track progress, and receive AI-powered guidance — all in
            one intelligent platform.
          </p>

          {/* BUTTONS */}

          <div className="mt-10 flex flex-wrap items-center gap-4">

            <a href="#roadmaps">
              <button className="rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-indigo-200 transition duration-300 hover:scale-105 hover:shadow-2xl">
                Start Your Journey
              </button>
            </a>

            <a href="#dashboard">
              <button className="rounded-2xl border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-700 transition duration-300 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-lg">
                Explore Dashboard
              </button>
            </a>

          </div>

          {/* STATS */}

          <div className="mt-12 flex flex-wrap items-center gap-10">

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                10K+
              </h3>

              <p className="text-slate-500">
                Career Roadmaps
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                95%
              </h3>

              <p className="text-slate-500">
                Student Satisfaction
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                24/7
              </h3>

              <p className="text-slate-500">
                AI Guidance
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="relative">

          {/* BACKGROUND GLOW */}

          <div className="absolute -top-10 -left-10 h-72 w-72 rounded-full bg-indigo-200 opacity-40 blur-3xl"></div>

          {/* MAIN CARD */}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl"
          >

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-slate-500">
                  Career Progress
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  Software Engineer
                </h2>
              </div>

              <div className="rounded-2xl bg-indigo-100 px-4 py-2">
                <span className="text-sm font-semibold text-indigo-700">
                  82% Complete
                </span>
              </div>

            </div>

            {/* PROGRESS BARS */}

            <div className="mt-8 space-y-5">

              {/* REACT */}

              <div className="rounded-2xl bg-slate-50 p-5">

                <div className="mb-2 flex items-center justify-between">

                  <p className="font-semibold text-slate-700">
                    React Mastery
                  </p>

                  <span className="text-sm text-slate-500">
                    90%
                  </span>

                </div>

                <div className="h-3 rounded-full bg-slate-200">

                  <div className="h-3 w-[90%] rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>

                </div>
              </div>

              {/* DSA */}

              <div className="rounded-2xl bg-slate-50 p-5">

                <div className="mb-2 flex items-center justify-between">

                  <p className="font-semibold text-slate-700">
                    Data Structures
                  </p>

                  <span className="text-sm text-slate-500">
                    75%
                  </span>

                </div>

                <div className="h-3 rounded-full bg-slate-200">

                  <div className="h-3 w-[75%] rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500"></div>

                </div>
              </div>

              {/* AI */}

              <div className="rounded-2xl bg-slate-50 p-5">

                <div className="mb-2 flex items-center justify-between">

                  <p className="font-semibold text-slate-700">
                    AI Engineering
                  </p>

                  <span className="text-sm text-slate-500">
                    68%
                  </span>

                </div>

                <div className="h-3 rounded-full bg-slate-200">

                  <div className="h-3 w-[68%] rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>

                </div>
              </div>

            </div>

          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
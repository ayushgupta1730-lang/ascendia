"use client";

import { motion } from "framer-motion";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

export default function DashboardPreview() {

  const [userEmail, setUserEmail] =
    useState<string | null>(null);

  useEffect(() => {

    async function getUser() {

      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUserEmail(user?.email || null);

    }

    getUser();

  }, []);

  return (
    <motion.section
      id="dashboard"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADING */}

        <div className="max-w-3xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Smart Career Dashboard
          </p>

          <h2 className="text-5xl font-black leading-tight text-slate-900">
            Everything students need to track growth and stay ahead.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Monitor learning progress, internship applications, AI mentor
            insights, and roadmap completion through a beautifully designed
            intelligent dashboard.
          </p>

        </div>

        {/* DASHBOARD */}

        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl"
        >

          {/* TOP BAR */}

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">

            <div>

              <h3 className="text-2xl font-bold text-slate-900">
                Welcome back 👋
              </h3>

              <p className="mt-1 text-slate-500">
                {userEmail || "Track your personalized growth overview."}
              </p>

            </div>

            <button className="rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition duration-300 hover:scale-105 hover:shadow-2xl">
              Generate AI Roadmap
            </button>

          </div>

          {/* GRID */}

          <div className="mt-8 grid gap-6 lg:grid-cols-3">

            {/* LEFT COLUMN */}

            <div className="space-y-6 lg:col-span-2">

              {/* ANALYTICS CARD */}

              <motion.div
                id="analytics"
                whileHover={{
                  scale: 1.01,
                  y: -4,
                }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl bg-slate-50 p-6"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-slate-500">
                      Weekly Productivity
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-slate-900">
                      84%
                    </h3>

                  </div>

                  <div className="rounded-2xl bg-green-100 px-4 py-2">

                    <span className="text-sm font-semibold text-green-700">
                      +12% Growth
                    </span>

                  </div>

                </div>

                <div className="mt-8 flex items-end gap-3">

                  <div className="h-20 w-full rounded-t-2xl bg-indigo-300 transition duration-300 hover:scale-105"></div>

                  <div className="h-32 w-full rounded-t-2xl bg-indigo-400 transition duration-300 hover:scale-105"></div>

                  <div className="h-24 w-full rounded-t-2xl bg-indigo-500 transition duration-300 hover:scale-105"></div>

                  <div className="h-40 w-full rounded-t-2xl bg-indigo-600 transition duration-300 hover:scale-105"></div>

                  <div className="h-28 w-full rounded-t-2xl bg-purple-500 transition duration-300 hover:scale-105"></div>

                  <div className="h-44 w-full rounded-t-2xl bg-purple-600 transition duration-300 hover:scale-105"></div>

                  <div className="h-36 w-full rounded-t-2xl bg-pink-500 transition duration-300 hover:scale-105"></div>

                </div>

              </motion.div>

              {/* ROADMAP CARD */}

              <motion.div
                whileHover={{
                  scale: 1.01,
                  y: -4,
                }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl bg-slate-50 p-6"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-2xl font-bold text-slate-900">
                      Full Stack Engineering Roadmap
                    </h3>

                    <p className="mt-2 text-slate-500">
                      Personalized by AI based on your interests.
                    </p>

                  </div>

                  <span className="rounded-2xl bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                    72% Completed
                  </span>

                </div>

                <div className="mt-8 space-y-5">

                  <div className="flex items-center gap-4 rounded-2xl bg-white p-4 transition duration-300 hover:shadow-lg">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </div>

                    <div>

                      <h4 className="font-semibold text-slate-900">
                        HTML, CSS & Tailwind
                      </h4>

                      <p className="text-sm text-slate-500">
                        Completed successfully
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-4 rounded-2xl bg-white p-4 transition duration-300 hover:shadow-lg">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      →
                    </div>

                    <div>

                      <h4 className="font-semibold text-slate-900">
                        React & Next.js
                      </h4>

                      <p className="text-sm text-slate-500">
                        Currently in progress
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-4 rounded-2xl bg-white p-4 transition duration-300 hover:shadow-lg">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-500">
                      ○
                    </div>

                    <div>

                      <h4 className="font-semibold text-slate-900">
                        Backend & APIs
                      </h4>

                      <p className="text-sm text-slate-500">
                        Upcoming milestone
                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>

            </div>

            {/* RIGHT COLUMN */}

            <div className="space-y-6">

              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-white shadow-xl"
              >

                <p className="text-sm font-medium text-indigo-100">
                  AI Mentor Insights
                </p>

                <h3 className="mt-4 text-2xl font-bold">
                  You're progressing faster than 78% of students.
                </h3>

                <p className="mt-4 leading-7 text-indigo-100">
                  Based on your learning consistency and project completion,
                  you’re on track for internship readiness within 6 weeks.
                </p>

              </motion.div>

            </div>

          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
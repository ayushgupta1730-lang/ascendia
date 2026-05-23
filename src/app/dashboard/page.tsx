"use client";

import { useSession } from "next-auth/react";

import { motion } from "framer-motion";

export default function DashboardPage() {

  const { data: session } =
    useSession();

  const stats = [

    {
      title: "Saved Colleges",
      value: "12",
      color:
        "from-indigo-500 to-purple-500",
    },

    {
      title: "Compared Colleges",
      value: "5",
      color:
        "from-pink-500 to-rose-500",
    },

    {
      title: "Roadmap Progress",
      value: "68%",
      color:
        "from-green-500 to-emerald-500",
    },

    {
      title: "AI Sessions",
      value: "24",
      color:
        "from-orange-500 to-yellow-500",
    },

  ];

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">

      <div className="mx-auto max-w-7xl">

        {/* HERO */}

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Student Dashboard
            </p>

            <h1 className="mt-4 text-5xl font-black leading-tight text-slate-900">

              Welcome back,
              {" "}
              {session?.user?.name ||
                "Student"} 👋

            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">

              Track your college exploration,
              career growth,
              AI guidance,
              and internship preparation journey.

            </p>

          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl">

            <p className="text-sm text-slate-500">
              Logged in as
            </p>

            <h3 className="mt-3 text-xl font-black text-slate-900">
              {session?.user?.email}
            </h3>

          </div>

        </div>

        {/* STATS */}

        <div className="mt-16 grid gap-8 lg:grid-cols-4">

          {stats.map((stat) => (

            <motion.div
              key={stat.title}
              whileHover={{
                y: -6,
              }}
              className={`rounded-[2rem] bg-gradient-to-r ${stat.color} p-8 text-white shadow-2xl`}
            >

              <p className="text-sm font-medium text-white/80">
                {stat.title}
              </p>

              <h2 className="mt-6 text-5xl font-black">
                {stat.value}
              </h2>

            </motion.div>

          ))}

        </div>

        {/* GRID */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {/* SAVED COLLEGES */}

          <div className="rounded-[2rem] bg-white p-8 shadow-xl lg:col-span-2">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                  Saved Colleges
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Your Personalized List
                </h2>

              </div>

              <button className="rounded-2xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200">
                View All
              </button>

            </div>

            <div className="mt-10 space-y-5">

              {[
                "IIT Delhi",
                "BITS Pilani",
                "Graphic Era",
                "IIIT Hyderabad",
              ].map((college) => (

                <div
                  key={college}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 p-5"
                >

                  <div>

                    <h3 className="text-lg font-black text-slate-900">
                      {college}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Placement focused engineering college
                    </p>

                  </div>

                  <button className="rounded-xl bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                    Explore
                  </button>

                </div>

              ))}

            </div>

          </div>

          {/* ACTIVITY */}

          <div className="rounded-[2rem] bg-white p-8 shadow-xl">

            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Recent Activity
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              AI & Career Updates
            </h2>

            <div className="mt-10 space-y-6">

              {[
                "Asked AI about machine learning roadmap",
                "Compared IIT Delhi vs BITS Pilani",
                "Saved Graphic Era Dehradun",
                "Explored AI internships",
              ].map((activity) => (

                <div
                  key={activity}
                  className="rounded-2xl bg-slate-100 p-5"
                >

                  <p className="text-sm leading-7 text-slate-700">
                    {activity}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* ROADMAP */}

        <div className="mt-16 rounded-[2rem] bg-white p-10 shadow-xl">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                Career Roadmap
              </p>

              <h2 className="mt-3 text-4xl font-black text-slate-900">
                AI Engineer Journey
              </h2>

            </div>

            <button className="rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-4 text-sm font-semibold text-white shadow-lg">
              Continue Learning
            </button>

          </div>

          <div className="mt-12">

            <div className="h-5 overflow-hidden rounded-full bg-slate-200">

              <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />

            </div>

            <div className="mt-4 flex justify-between text-sm font-medium text-slate-500">

              <span>
                Started
              </span>

              <span>
                68% Completed
              </span>

              <span>
                Placement Ready
              </span>

            </div>

          </div>

        </div>

      </div>

    </main>
  );

}
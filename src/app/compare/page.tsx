"use client";

import { useEffect, useState } from "react";

export default function ComparePage() {

  const [colleges, setColleges] =
    useState<any[]>([]);

  useEffect(() => {

    const stored =
      localStorage.getItem(
        "compareData"
      );

    if (stored) {

      setColleges(
        JSON.parse(stored)
      );

    }

  }, []);

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">

      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              College Comparison
            </p>

            <h1 className="mt-4 text-5xl font-black text-slate-900">
              Compare Colleges Side by Side
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Analyze placements, rankings, fees,
              opportunities, and career outcomes
              across your selected colleges.
            </p>

          </div>

        </div>

        {/* GRID */}

        <div className="mt-14 grid gap-8 lg:grid-cols-3">

          {colleges.map((college) => (

            <div
              key={college.id}
              className="overflow-hidden rounded-[2rem] bg-white shadow-2xl"
            >

              {/* IMAGE */}

              <div className="relative h-56 overflow-hidden">

                <img
                  src={college.image}
                  alt={college.name}
                  className="h-full w-full object-cover"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-indigo-600 backdrop-blur-md">
                  #{college.ranking} Ranked
                </div>

              </div>

              {/* CONTENT */}

              <div className="p-8">

                <h2 className="text-3xl font-black text-slate-900">
                  {college.shortName}
                </h2>

                <p className="mt-3 text-slate-500">
                  {college.location}, {college.state}
                </p>

                {/* STATS */}

                <div className="mt-8 space-y-5">

                  <div className="rounded-2xl bg-slate-100 p-5">

                    <p className="text-sm text-slate-500">
                      Fees
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-slate-900">
                      {college.fees}
                    </h3>

                  </div>

                  <div className="rounded-2xl bg-slate-100 p-5">

                    <p className="text-sm text-slate-500">
                      Average Package
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-green-600">
                      {college.averagePackage}
                    </h3>

                  </div>

                  <div className="rounded-2xl bg-slate-100 p-5">

                    <p className="text-sm text-slate-500">
                      Highest Package
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-slate-900">
                      {college.highestPackage}
                    </h3>

                  </div>

                  <div className="rounded-2xl bg-slate-100 p-5">

                    <p className="text-sm text-slate-500">
                      NIRF Ranking
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-indigo-600">
                      #{college.nirfRank}
                    </h3>

                  </div>

                </div>

                {/* COURSES */}

                <div className="mt-8 flex flex-wrap gap-3">

                  {college.courses.map(
                    (course: string) => (

                      <span
                        key={course}
                        className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700"
                      >
                        {course}
                      </span>

                    )
                  )}

                </div>

                {/* TAGS */}

                <div className="mt-8 flex flex-wrap gap-3">

                  {college.tags.map(
                    (tag: string) => (

                      <span
                        key={tag}
                        className="rounded-full bg-indigo-100 px-4 py-2 text-xs font-bold text-indigo-700"
                      >
                        {tag}
                      </span>

                    )
                  )}

                </div>

                {/* AI INSIGHT */}

                <div className="mt-8 rounded-[2rem] bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white">

                  <p className="text-sm font-semibold uppercase tracking-widest">
                    AI Insight
                  </p>

                  <p className="mt-4 text-sm leading-8">

                    {college.averagePackage.includes("25")
                      ? "Excellent for top-tier placements and premium opportunities."
                      : college.fees.includes("₹6")
                      ? "Strong ROI and affordable growth opportunities."
                      : "Balanced academics, placements, and skill development."}

                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );

}
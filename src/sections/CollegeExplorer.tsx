"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { motion, AnimatePresence } from "framer-motion";

import { colleges } from "@/data/colleges";

export default function CollegeExplorer() {

  const [search, setSearch] = useState("");

  const [selectedState, setSelectedState] =
    useState("All");

  const [savedColleges, setSavedColleges] =
  useState<number[]>([]);

const [compareColleges, setCompareColleges] =
  useState<number[]>([]);

useEffect(() => {

  const saved =
    localStorage.getItem(
      "savedColleges"
    );

  const compared =
    localStorage.getItem(
      "compareColleges"
    );

  if (saved) {
    setSavedColleges(
      JSON.parse(saved)
    );
  }

  if (compared) {
    setCompareColleges(
      JSON.parse(compared)
    );
  }

}, []);

  const states = useMemo(() => {

    const uniqueStates =
      Array.from(
        new Set(
          colleges.map(
            (college) => college.state
          )
        )
      );

    return ["All", ...uniqueStates];

  }, []);

  const filteredColleges = useMemo(() => {

    return colleges.filter((college) => {

      const matchesSearch =
        college.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        college.shortName
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        college.location
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        college.exams
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesState =
        selectedState === "All" ||
        college.state === selectedState;

      return (
        matchesSearch &&
        matchesState
      );

    });

  }, [search, selectedState]);

  function toggleSave(id: number) {

    const updated =
  savedColleges.includes(id)
    ? savedColleges.filter(
        (collegeId) =>
          collegeId !== id
      )
    : [...savedColleges, id];

setSavedColleges(updated);

localStorage.setItem(
  "savedColleges",
  JSON.stringify(updated)
);

  }

  function toggleCompare(id: number) {

    let updated: number[] = [];

if (
  compareColleges.includes(id)
) {

  updated =
    compareColleges.filter(
      (collegeId) =>
        collegeId !== id
    );

} else {

  if (
    compareColleges.length >= 3
  ) {
    return;
  }

  updated = [
    ...compareColleges,
    id,
  ];

}

setCompareColleges(updated);

localStorage.setItem(
  "compareColleges",
  JSON.stringify(updated)
);

  }

  const comparedData =
    colleges.filter((college) =>
      compareColleges.includes(
        college.id
      )
    );

  return (
    <section className="relative px-6 py-24">

      <div className="mx-auto max-w-7xl">

        {/* TOP */}

        <div className="max-w-3xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Smart College Discovery
          </p>

          <h2 className="text-5xl font-black leading-tight text-slate-900">
            Discover colleges intelligently with AI-powered insights.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore placements, rankings, fees, campus information,
            eligibility, and career opportunities across India’s
            top engineering colleges.
          </p>

        </div>

        {/* SEARCH */}

        <div className="mt-12 flex flex-col gap-4 lg:flex-row">

          <input
            type="text"
            placeholder="Search colleges, exams, states..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm outline-none transition focus:border-indigo-500"
          />

          <select
            value={selectedState}
            onChange={(e) =>
              setSelectedState(
                e.target.value
              )
            }
            className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm outline-none transition focus:border-indigo-500"
          >

            {states.map((state) => (

              <option
                key={state}
                value={state}
              >
                {state}
              </option>

            ))}

          </select>

        </div>

        {/* STATS */}

        <div className="mt-8 flex flex-wrap gap-4">

          <div className="rounded-2xl bg-indigo-100 px-5 py-3 text-sm font-bold text-indigo-700">
            {filteredColleges.length} Colleges
          </div>

          <div className="rounded-2xl bg-pink-100 px-5 py-3 text-sm font-bold text-pink-700">
            {savedColleges.length} Saved
          </div>

          <div className="rounded-2xl bg-green-100 px-5 py-3 text-sm font-bold text-green-700">
            {compareColleges.length}/3 Comparing
          </div>

        </div>

        {/* GRID */}

        <div className="mt-12 grid gap-8 lg:grid-cols-3">

          {filteredColleges.map((college) => {

            const isSaved =
              savedColleges.includes(
                college.id
              );

            const isCompared =
              compareColleges.includes(
                college.id
              );

            return (

              <motion.div
                key={college.id}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl"
              >

                {/* IMAGE */}

                <div className="relative h-56 overflow-hidden">

                  <img
                    src={college.image}
                    alt={college.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-110"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-indigo-600 backdrop-blur-md">
                    #{college.ranking} Ranked
                  </div>

                </div>

                {/* CONTENT */}

                <div className="p-7">

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <h3 className="text-2xl font-black text-slate-900">
                        {college.shortName}
                      </h3>

                      <p className="mt-2 text-sm text-slate-500">
                        {college.location}, {college.state}
                      </p>

                    </div>

                    <div className="rounded-2xl bg-indigo-100 px-4 py-2 text-xs font-bold text-indigo-700">
                      NIRF #{college.nirfRank}
                    </div>

                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    {college.description}
                  </p>

                  {/* STATS */}

                  <div className="mt-7 grid grid-cols-2 gap-4">

                    <div className="rounded-2xl bg-slate-50 p-4">

                      <p className="text-xs text-slate-500">
                        Fees
                      </p>

                      <h4 className="mt-2 text-lg font-black text-slate-900">
                        {college.fees}
                      </h4>

                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4">

                      <p className="text-xs text-slate-500">
                        Avg Package
                      </p>

                      <h4 className="mt-2 text-lg font-black text-green-600">
                        {college.averagePackage}
                      </h4>

                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4">

                      <p className="text-xs text-slate-500">
                        Highest Package
                      </p>

                      <h4 className="mt-2 text-lg font-black text-slate-900">
                        {college.highestPackage}
                      </h4>

                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4">

                      <p className="text-xs text-slate-500">
                        Entrance Exam
                      </p>

                      <h4 className="mt-2 text-sm font-bold text-slate-900">
                        {college.exams[0]}
                      </h4>

                    </div>

                  </div>

                  {/* COURSES */}

                  <div className="mt-7 flex flex-wrap gap-3">

                    {college.courses.map((course) => (

                      <span
                        key={course}
                        className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700"
                      >
                        {course}
                      </span>

                    ))}

                  </div>

                  {/* TAGS */}

                  <div className="mt-6 flex flex-wrap gap-3">

                    {college.tags.map((tag) => (

                      <span
                        key={tag}
                        className="rounded-full bg-indigo-100 px-4 py-2 text-xs font-bold text-indigo-700"
                      >
                        {tag}
                      </span>

                    ))}

                  </div>

                  {/* BUTTONS */}

                  <div className="mt-8 grid grid-cols-3 gap-3">

                    <a
                      href={college.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-4 text-center text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02]"
                    >
                      Visit
                    </a>

                    <button
                      onClick={() =>
                        toggleSave(
                          college.id
                        )
                      }
                      className={`rounded-2xl px-4 py-4 text-sm font-semibold transition ${
                        isSaved
                          ? "bg-pink-500 text-white"
                          : "border border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >

                      {isSaved
                        ? "Saved"
                        : "Save"}

                    </button>

                    <button
                      onClick={() =>
                        toggleCompare(
                          college.id
                        )
                      }
                      className={`rounded-2xl px-4 py-4 text-sm font-semibold transition ${
                        isCompared
                          ? "bg-green-500 text-white"
                          : "border border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >

                      {isCompared
                        ? "Added"
                        : "Compare"}

                    </button>

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

      {/* COMPARE BAR */}

      <AnimatePresence>

        {compareColleges.length > 0 && (

          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: 100,
              opacity: 0,
            }}
            className="fixed bottom-6 left-1/2 z-50 w-[95%] max-w-5xl -translate-x-1/2 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl"
          >

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                  College Comparison
                </p>

                <h3 className="mt-2 text-2xl font-black text-slate-900">

                  {comparedData
                    .map(
                      (college) =>
                        college.shortName
                    )
                    .join(" vs ")}

                </h3>

              </div>

              <div className="flex gap-3">

                <button
                  onClick={() =>
                    setCompareColleges([])
                  }
                  className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Clear
                </button>

                <button
  onClick={() => {

    localStorage.setItem(
      "compareData",
      JSON.stringify(comparedData)
    );

    window.open(
      "/compare",
      "_blank"
    );

  }}
  className="rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg"
>
  Compare Now
</button>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );

}
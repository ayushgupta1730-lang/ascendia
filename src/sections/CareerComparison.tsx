"use client";

import { motion } from "framer-motion";

const careers = [
  {
    title: "Full Stack Engineer",
    salary: "$110K",
    demand: "High",
    difficulty: "Medium",
    growth: "+28%",
    skills: ["React", "Next.js", "Node.js", "APIs"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "AI Engineer",
    salary: "$145K",
    demand: "Very High",
    difficulty: "Hard",
    growth: "+42%",
    skills: ["Python", "LLMs", "ML", "AI Systems"],
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Data Scientist",
    salary: "$125K",
    demand: "High",
    difficulty: "Medium",
    growth: "+31%",
    skills: ["Python", "SQL", "Pandas", "Visualization"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Cybersecurity",
    salary: "$118K",
    demand: "Very High",
    difficulty: "Hard",
    growth: "+36%",
    skills: ["Security", "Networking", "Linux", "Cloud"],
    color: "from-emerald-500 to-green-500",
  },
];

export default function CareerComparison() {
  return (
    <section className="px-6 py-24">

      <div className="mx-auto max-w-7xl">

        {/* TOP */}

        <div className="max-w-3xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-600">
            AI Career Intelligence
          </p>

          <h2 className="text-5xl font-black leading-tight text-slate-900">
            Compare modern tech careers intelligently.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore salary trends, demand, required skills, growth opportunities,
            and roadmap complexity across the most in-demand technology careers.
          </p>

        </div>

        {/* GRID */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {careers.map((career) => (

            <motion.div
              key={career.title}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl"
            >

              {/* TOP */}

              <div
                className={`bg-gradient-to-r ${career.color} p-8 text-white`}
              >

                <h3 className="text-3xl font-black">
                  {career.title}
                </h3>

                <p className="mt-3 text-white/80">
                  Future-ready career pathway powered by AI-driven industry analysis.
                </p>

              </div>

              {/* CONTENT */}

              <div className="space-y-6 p-8">

                {/* STATS */}

                <div className="grid grid-cols-2 gap-4">

                  <div className="rounded-2xl bg-slate-50 p-5">

                    <p className="text-sm text-slate-500">
                      Average Salary
                    </p>

                    <h4 className="mt-2 text-2xl font-black text-slate-900">
                      {career.salary}
                    </h4>

                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">

                    <p className="text-sm text-slate-500">
                      Market Demand
                    </p>

                    <h4 className="mt-2 text-2xl font-black text-slate-900">
                      {career.demand}
                    </h4>

                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">

                    <p className="text-sm text-slate-500">
                      Difficulty
                    </p>

                    <h4 className="mt-2 text-2xl font-black text-slate-900">
                      {career.difficulty}
                    </h4>

                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">

                    <p className="text-sm text-slate-500">
                      Growth Rate
                    </p>

                    <h4 className="mt-2 text-2xl font-black text-green-600">
                      {career.growth}
                    </h4>

                  </div>

                </div>

                {/* SKILLS */}

                <div>

                  <h4 className="text-lg font-bold text-slate-900">
                    Core Skills
                  </h4>

                  <div className="mt-4 flex flex-wrap gap-3">

                    {career.skills.map((skill) => (

                      <span
                        key={skill}
                        className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                      >
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>

                {/* BUTTON */}

                <button
                  className={`w-full rounded-2xl bg-gradient-to-r ${career.color} px-5 py-4 text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02]`}
                >
                  Explore Career Path
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
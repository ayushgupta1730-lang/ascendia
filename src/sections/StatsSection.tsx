"use client";

import { motion } from "framer-motion";

export default function StatsSection() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">

        {/* CARD 1 */}

        <motion.div
          whileHover={{
            y: -6,
            scale: 1.02,
          }}
          transition={{ duration: 0.2 }}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <h2 className="text-4xl font-black text-slate-900">
            10K+
          </h2>

          <p className="mt-3 text-slate-600">
            Career Roadmaps Generated
          </p>
        </motion.div>

        {/* CARD 2 */}

        <motion.div
          whileHover={{
            y: -6,
            scale: 1.02,
          }}
          transition={{ duration: 0.2 }}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <h2 className="text-4xl font-black text-indigo-600">
            95%
          </h2>

          <p className="mt-3 text-slate-600">
            Student Success Satisfaction
          </p>
        </motion.div>

        {/* CARD 3 */}

        <motion.div
          whileHover={{
            y: -6,
            scale: 1.02,
          }}
          transition={{ duration: 0.2 }}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <h2 className="text-4xl font-black text-cyan-600">
            24/7
          </h2>

          <p className="mt-3 text-slate-600">
            AI Mentor Availability
          </p>
        </motion.div>

        {/* CARD 4 */}

        <motion.div
          whileHover={{
            y: -6,
            scale: 1.02,
          }}
          transition={{ duration: 0.2 }}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <h2 className="text-4xl font-black text-purple-600">
            500+
          </h2>

          <p className="mt-3 text-slate-600">
            Internship Opportunities Tracked
          </p>
        </motion.div>

      </div>
    </section>
  );
}
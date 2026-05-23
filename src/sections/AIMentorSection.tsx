"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

export default function AIMentorSection() {

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text:
        "Based on your recent progress, I recommend focusing on React projects and API integration to improve internship readiness.",
    },

    {
      type: "user",
      text:
        "Can you create a personalized roadmap for becoming a full stack engineer?",
    },

    {
      type: "bot",
      text:
        "Absolutely. I’ll generate a 12-week roadmap covering frontend, backend, databases, deployment, and real-world project building.",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {

    if (!input.trim()) return;

    const userMessage = {
      type: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    setTimeout(() => {

      const botReply = {
        type: "bot",
        text:
          "I analyzed your interests and generated personalized recommendations to accelerate your learning journey.",
      };

      setMessages((prev) => [...prev, botReply]);

    }, 1200);
  };

  return (
    <section
      id="mentor"
      className="px-6 py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">

        {/* LEFT SIDE */}

        <div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-600">
            AI Career Mentor
          </p>

          <h2 className="text-5xl font-black leading-tight text-slate-900">
            Your personal AI mentor that guides every step.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Ascendia analyzes your learning patterns, skills, projects,
            and goals to generate intelligent career guidance tailored
            specifically for you.
          </p>

          {/* FEATURES */}

          <div className="mt-10 space-y-5">

            <div className="flex gap-4 rounded-3xl bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-xl">
                🧠
              </div>

              <div>

                <h3 className="text-lg font-bold text-slate-900">
                  Smart Skill Analysis
                </h3>

                <p className="mt-1 text-slate-600">
                  AI identifies strengths and improvement areas based on your activity.
                </p>

              </div>
            </div>

            <div className="flex gap-4 rounded-3xl bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-xl">
                🚀
              </div>

              <div>

                <h3 className="text-lg font-bold text-slate-900">
                  Internship Readiness
                </h3>

                <p className="mt-1 text-slate-600">
                  Get personalized suggestions to improve your hiring chances.
                </p>

              </div>
            </div>

            <div className="flex gap-4 rounded-3xl bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-xl">
                📈
              </div>

              <div>

                <h3 className="text-lg font-bold text-slate-900">
                  Adaptive Roadmaps
                </h3>

                <p className="mt-1 text-slate-600">
                  Dynamic learning plans that evolve with your progress.
                </p>

              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="relative overflow-hidden rounded-[2rem]">

          {/* MAIN CARD */}

          <motion.div
            whileHover={{
              y: -4,
            }}
            transition={{ duration: 0.2 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl"
          >

            {/* TOP */}

            <div className="flex items-center gap-4 border-b border-slate-100 pb-6">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-2xl font-bold text-white shadow-lg">
                AI
              </div>

              <div>

                <h3 className="text-xl font-bold text-slate-900">
                  Ascendia Mentor
                </h3>

                <p className="text-sm text-green-600">
                  ● Online & analyzing your profile
                </p>

              </div>
            </div>

            {/* CHAT */}

            <div className="mt-8 space-y-6 max-h-[420px] overflow-y-auto pr-2">

              <AnimatePresence>

                {messages.map((message, index) => (

                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={
                      message.type === "user"
                        ? "ml-auto max-w-md rounded-3xl rounded-tr-md bg-gradient-to-r from-indigo-500 to-purple-500 p-5 text-white shadow-lg"
                        : "max-w-md rounded-3xl rounded-tl-md bg-slate-100 p-5"
                    }
                  >

                    <p
                      className={
                        message.type === "user"
                          ? "leading-7 text-white"
                          : "leading-7 text-slate-700"
                      }
                    >
                      {message.text}
                    </p>

                  </motion.div>

                ))}

              </AnimatePresence>

            </div>

            {/* INPUT */}

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask your AI mentor anything..."
                className="w-full bg-transparent outline-none placeholder:text-slate-400"
              />

              <button
                onClick={handleSend}
                className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-lg"
              >
                Send
              </button>

            </div>
          </motion.div>

          {/* FLOATING CARD */}

          <div className="absolute -right-6 -top-6 hidden rounded-3xl bg-white p-5 shadow-2xl lg:block">

            <p className="text-sm font-semibold text-slate-500">
              AI Accuracy
            </p>

            <h3 className="mt-2 text-3xl font-black text-slate-900">
              98%
            </h3>

          </div>

        </div>
      </div>
    </section>
  );
}
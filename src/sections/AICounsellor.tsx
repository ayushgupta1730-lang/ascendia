"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { motion } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AICounsellor() {

  const [input, setInput] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [messages, setMessages] =
    useState<Message[]>([
      {
        role: "assistant",
        content:
          "Hey 👋 I’m Ascendia AI. Ask me about colleges, placements, AI careers, internships, coding roadmaps, or your future.",
      },
    ]);

  const bottomRef =
    useRef<HTMLDivElement | null>(
      null
    );

  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages]);

  async function handleSend() {

    if (!input.trim()) return;

    const userMessage = {
      role: "user" as const,
      content: input,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setInput("");

    setLoading(true);

    try {

      const response =
        await fetch("/api/ai", {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            message: input,
          }),

        });

      const data =
        await response.json();

      setMessages((prev) => [

        ...prev,

        {
          role: "assistant",
          content:
            data.response ||
            "Something went wrong.",
        },

      ]);

    } catch (error) {

      setMessages((prev) => [

        ...prev,

        {
          role: "assistant",
          content:
            "AI failed to respond.",
        },

      ]);

    }

    setLoading(false);

  }

  return (
    <section className="px-4 py-24 sm:px-6">

      <div className="mx-auto max-w-7xl">

        {/* TOP */}

        <div className="max-w-3xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
            ASCENDIA AI
          </p>

          <h2 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
            Your AI-powered career companion.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Get guidance on colleges, placements,
            internships, AI careers, coding,
            future opportunities, and skill growth —
            instantly.
          </p>

        </div>

        {/* CHAT */}

        <div className="mt-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)]">

          {/* HEADER */}

          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 sm:px-8">

            <div>

              <h3 className="text-2xl font-black text-slate-900">
                Ascendia AI
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Career Intelligence System
              </p>

            </div>

            <div className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2">

              <div className="h-2.5 w-2.5 rounded-full bg-green-500" />

              <p className="text-xs font-semibold text-green-700">
                Online
              </p>

            </div>

          </div>

          {/* MESSAGES */}

          <div className="h-[420px] overflow-y-auto bg-gradient-to-b from-slate-50 to-white px-4 py-6 sm:px-6 sm:py-8">

            <div className="space-y-6">

              {messages.map(
                (
                  message,
                  index
                ) => (

                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className={`flex ${
                      message.role === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >

                    <div
                      className={`max-w-[90%] rounded-[2rem] px-5 py-4 shadow-lg sm:max-w-2xl sm:px-6 sm:py-5 ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                          : "bg-white text-slate-800"
                      }`}
                    >

                      <p className="whitespace-pre-wrap text-sm leading-7 sm:text-[15px]">

                        {message.content}

                      </p>

                    </div>

                  </motion.div>

                )
              )}

              {loading && (

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  className="flex justify-start"
                >

                  <div className="rounded-[2rem] bg-white px-6 py-5 shadow-lg">

                    <div className="flex gap-2">

                      <div className="h-3 w-3 animate-bounce rounded-full bg-indigo-500" />

                      <div className="h-3 w-3 animate-bounce rounded-full bg-purple-500 delay-100" />

                      <div className="h-3 w-3 animate-bounce rounded-full bg-pink-500 delay-200" />

                    </div>

                  </div>

                </motion.div>

              )}

              <div ref={bottomRef} />

            </div>

          </div>

          {/* INPUT */}

          <div className="border-t border-slate-200 bg-white p-4 sm:p-6">

            <div className="flex flex-col gap-4 sm:flex-row">

              <input
                type="text"
                placeholder="Ask Ascendia AI anything..."
                value={input}
                onChange={(e) =>
                  setInput(e.target.value)
                }
                onKeyDown={(e) => {

                  if (
                    e.key === "Enter"
                  ) {
                    handleSend();
                  }

                }}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm outline-none transition focus:border-indigo-500"
              />

              <button
                onClick={handleSend}
                disabled={loading}
                className="rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-4 text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02] disabled:opacity-50"
              >
                Send
              </button>

            </div>

            {/* QUICK PROMPTS */}

            <div className="mt-6 flex flex-wrap gap-3">

              {[
                "Best colleges for AI engineering?",
                "Roadmap to become AI engineer",
                "Top internships for CSE students",
                "Best skills for placements",
              ].map((prompt) => (

                <button
                  key={prompt}
                  onClick={() =>
                    setInput(prompt)
                  }
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  {prompt}
                </button>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );

}
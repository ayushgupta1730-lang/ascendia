"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { supabase } from "@/lib/supabase";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({
  isOpen,
  onClose,
}: AuthModalProps) {

  const [isLogin, setIsLogin] = useState(false);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  async function handleAuth() {

    try {

      setLoading(true);

      setError("");

      setSuccess("");

      // LOGIN

      if (isLogin) {

        const { error } =
          await supabase.auth.signInWithPassword({

            email,

            password,

          });

        if (error) {

          setError(error.message);

          return;

        }

        setSuccess("Login successful!");

        return;

      }

      // SIGNUP

      const { error } =
        await supabase.auth.signUp({

          email,

          password,

          options: {

            data: {
              full_name: name,
            },

            emailRedirectTo:
              "http://localhost:3000",

          },

        });

      if (error) {

        setError(error.message);

        return;

      }

      setSuccess(
        "Verification email sent. Please check your inbox."
      );

      setName("");

      setEmail("");

      setPassword("");

    } catch (error) {

      console.log(error);

      setError("Something went wrong.");

    } finally {

      setLoading(false);

    }

  }

  return (
    <AnimatePresence>

      {isOpen && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6 backdrop-blur-sm"
        >

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-md rounded-[2rem] bg-white p-8 shadow-2xl"
          >

            <button
              onClick={onClose}
              className="absolute right-5 top-5 text-xl text-slate-400 transition hover:text-slate-700"
            >
              ×
            </button>

            <div className="text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 text-2xl font-bold text-white shadow-lg">
                A
              </div>

              <h2 className="mt-6 text-3xl font-black text-slate-900">

                {isLogin
                  ? "Welcome Back"
                  : "Welcome to Ascendia"}

              </h2>

              <p className="mt-3 text-slate-500">

                {isLogin
                  ? "Login to continue your journey."
                  : "Continue your AI-powered career journey."}

              </p>

            </div>

            <div className="mt-8 space-y-4">

              {!isLogin && (

                <input
                  type="text"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-indigo-400"
                />

              )}

              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-indigo-400"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-indigo-400"
              />

            </div>

            {error && (
              <p className="mt-4 text-sm font-medium text-red-500">
                {error}
              </p>
            )}

            {success && (
              <p className="mt-4 text-sm font-medium text-green-600">
                {success}
              </p>
            )}

            <button
              onClick={handleAuth}
              disabled={loading}
              className="mt-6 w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-4 text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:shadow-2xl disabled:opacity-50"
            >

              {loading
                ? "Please wait..."
                : isLogin
                ? "Login"
                : "Create Account"}

            </button>

            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
                setSuccess("");
              }}
              className="mt-4 w-full text-sm font-medium text-indigo-600 transition hover:text-indigo-700"
            >

              {isLogin
                ? "Don't have an account? Sign Up"
                : "Already have an account? Login"}

            </button>

            <div className="my-6 flex items-center gap-4">

              <div className="h-px w-full bg-slate-200"></div>

              <span className="text-sm text-slate-400">
                OR
              </span>

              <div className="h-px w-full bg-slate-200"></div>

            </div>

            <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">

              <span className="text-lg">
                🔵
              </span>

              Continue with Google

            </button>

            <p className="mt-6 text-center text-sm text-slate-500">
              By continuing, you agree to our Terms & Privacy Policy.
            </p>

          </motion.div>
        </motion.div>
      )}

    </AnimatePresence>
  );
}
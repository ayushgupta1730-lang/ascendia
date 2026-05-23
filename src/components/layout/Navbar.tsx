"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/auth/AuthModal";

import { supabase } from "@/lib/supabase";

export default function Navbar() {

  const [isAuthOpen, setIsAuthOpen] =
    useState(false);

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

    const {
      data: authListener,
    } = supabase.auth.onAuthStateChange(
      async () => {

        const {
          data: { user },
        } = await supabase.auth.getUser();

        setUserEmail(user?.email || null);

      }
    );

    return () => {

      authListener.subscription.unsubscribe();

    };

  }, []);

  async function handleLogout() {

    await supabase.auth.signOut();

    setUserEmail(null);

  }

  function scrollToSection(
    sectionId: string
  ) {

    const element =
      document.getElementById(
        sectionId
      );

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-lg">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* LOGO */}

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="text-left"
          >

            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Ascendia
            </h1>

            <p className="hidden text-sm text-slate-500 sm:block">
              Navigate your future with confidence.
            </p>

          </button>

          {/* NAV LINKS */}

          <nav className="hidden items-center gap-8 lg:flex">

            <button
              onClick={() =>
                scrollToSection(
                  "dashboard"
                )
              }
              className="text-sm font-medium text-slate-600 transition duration-300 hover:text-indigo-600"
            >
              Dashboard
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "colleges"
                )
              }
              className="text-sm font-medium text-slate-600 transition duration-300 hover:text-indigo-600"
            >
              Colleges
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "ai-counsellor"
                )
              }
              className="text-sm font-medium text-slate-600 transition duration-300 hover:text-indigo-600"
            >
              Ascendia AI
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "roadmaps"
                )
              }
              className="text-sm font-medium text-slate-600 transition duration-300 hover:text-indigo-600"
            >
              Roadmaps
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "features"
                )
              }
              className="text-sm font-medium text-slate-600 transition duration-300 hover:text-indigo-600"
            >
              Features
            </button>

          </nav>

          {/* AUTH */}

          {userEmail ? (

            <div className="flex items-center gap-4">

              <p className="hidden text-sm font-medium text-slate-700 sm:block">
                {userEmail}
              </p>

              <button
                onClick={handleLogout}
                className="rounded-xl border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Logout
              </button>

            </div>

          ) : (

            <button
              onClick={() =>
                setIsAuthOpen(true)
              }
              className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              Get Started
            </button>

          )}

        </div>

      </header>

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() =>
          setIsAuthOpen(false)
        }
      />
    </>
  );

}
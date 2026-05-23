"use client";

import { useEffect } from "react";

import Navbar from "@/components/layout/Navbar";

import HeroSection from "@/sections/HeroSection";
import StatsSection from "@/sections/StatsSection";
import DashboardPreview from "@/sections/DashboardPreview";
import FeaturesSection from "@/sections/FeaturesSection";
import CareerComparison from "@/sections/CareerComparison";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import CollegeExplorer from "@/sections/CollegeExplorer";
import AICounsellor from "@/sections/AICounsellor";
import RoadmapSection from "@/sections/RoadmapSection";

export default function HomePage() {

  useEffect(() => {

    window.history.scrollRestoration =
      "manual";

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

  }, []);

  return (
    <main className="min-h-screen bg-slate-50">

      <LoadingScreen />

      <Navbar />

      {/* HERO */}

      <section id="top">
        <HeroSection />
      </section>

      {/* STATS */}

      <StatsSection />

      {/* DASHBOARD */}

      <section id="dashboard">
        <DashboardPreview />
      </section>

      {/* FEATURES */}

      <section id="features">
        <FeaturesSection />
      </section>

      {/* COMPARISON */}

      <CareerComparison />

      {/* COLLEGES */}

      <section id="colleges">
        <CollegeExplorer />
      </section>

      {/* AI */}

      <section id="ai-counsellor">
        <AICounsellor />
      </section>

      {/* ROADMAPS */}

      <section id="roadmaps">
        <RoadmapSection />
      </section>

      <Footer />

    </main>
  );

}
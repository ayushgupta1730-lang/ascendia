"use client";

export const dynamic = "force-dynamic";

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

      <section id="top">
        <HeroSection />
      </section>

      <StatsSection />

      <section id="dashboard">
        <DashboardPreview />
      </section>

      <section id="features">
        <FeaturesSection />
      </section>

      <CareerComparison />

      <section id="colleges">
        <CollegeExplorer />
      </section>

      <section id="ai-counsellor">
        <AICounsellor />
      </section>

      <section id="roadmaps">
        <RoadmapSection />
      </section>

      <Footer />

    </main>

  );

}
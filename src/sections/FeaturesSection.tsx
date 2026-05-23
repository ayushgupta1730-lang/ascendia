export default function FeaturesSection() {
  const features = [
    {
      title: "AI Resume Analyzer",
      description:
        "Get instant resume feedback with AI-powered suggestions tailored for internships and placements.",
      icon: "📄",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "College Leaderboards",
      description:
        "Compare your progress with students from top universities and track your ranking.",
      icon: "🏆",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Smart Internship Matching",
      description:
        "AI recommends internships based on your skills, interests, and project experience.",
      icon: "🚀",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Learning Analytics",
      description:
        "Visualize your learning consistency, coding growth, and roadmap completion.",
      icon: "📊",
      gradient: "from-orange-400 to-yellow-500",
    },
    {
      title: "Project Intelligence",
      description:
        "Analyze project quality, GitHub activity, and technical strengths automatically.",
      icon: "💻",
      gradient: "from-emerald-500 to-green-500",
    },
    {
      title: "Career Heatmaps",
      description:
        "Discover trending technologies, hiring patterns, and skill demand in real-time.",
      icon: "🔥",
      gradient: "from-violet-500 to-fuchsia-500",
    },
  ];

  return (
    <section
      id="features"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* TOP */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
            Platform Features
          </p>

          <h2 className="mt-4 text-5xl font-black leading-tight text-slate-900">
            Everything students need to grow smarter.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Ascendia combines AI, analytics, career guidance, and internship
            intelligence into one modern student platform.
          </p>

        </div>

        {/* GRID */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* ICON */}

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.gradient} text-3xl shadow-lg`}
              >
                {feature.icon}
              </div>

              {/* CONTENT */}

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {feature.description}
              </p>

              {/* BUTTON */}

              <button className="mt-8 text-sm font-semibold text-indigo-600 transition group-hover:translate-x-1">
                Learn more →
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
export default function RoadmapSection() {
  return (
    <section 
     id="roadmaps"
    className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADING */}

        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Personalized Learning Paths
          </p>

          <h2 className="text-5xl font-black leading-tight text-slate-900">
            AI-generated career roadmaps tailored to your goals.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Ascendia intelligently creates personalized learning journeys
            based on your target role, current skills, and learning speed.
          </p>
        </div>

        {/* ROADMAP CARDS */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {/* CARD 1 */}

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-2xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
              💻
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900">
              Full Stack Engineer
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Master frontend, backend, APIs, databases, deployment,
              and scalable application architecture.
            </p>

            <div className="mt-8 space-y-4">

              <div className="rounded-2xl bg-white p-4">
                <p className="font-semibold text-slate-900">
                  Frontend Development
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  React, Next.js, Tailwind CSS
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4">
                <p className="font-semibold text-slate-900">
                  Backend Engineering
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  APIs, Prisma, PostgreSQL
                </p>
              </div>

            </div>

            <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-4 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]">
              Generate Roadmap
            </button>
          </div>

          {/* CARD 2 */}

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-2xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-2xl">
              📊
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900">
              Data Scientist
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Learn machine learning, analytics, visualization,
              Python ecosystems, and AI fundamentals.
            </p>

            <div className="mt-8 space-y-4">

              <div className="rounded-2xl bg-white p-4">
                <p className="font-semibold text-slate-900">
                  Data Analysis
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Python, Pandas, SQL
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4">
                <p className="font-semibold text-slate-900">
                  Machine Learning
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Scikit-learn, AI models
                </p>
              </div>

            </div>

            <button className="mt-8 w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-600">
              Explore Path
            </button>
          </div>

          {/* CARD 3 */}

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-2xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
              🤖
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900">
              AI Engineer
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Build intelligent systems using LLMs, AI workflows,
              vector databases, and automation pipelines.
            </p>

            <div className="mt-8 space-y-4">

              <div className="rounded-2xl bg-white p-4">
                <p className="font-semibold text-slate-900">
                  Generative AI
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  LLMs, Prompt Engineering
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4">
                <p className="font-semibold text-slate-900">
                  AI Systems
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  RAG, Vector DBs, Agents
                </p>
              </div>

            </div>

            <button className="mt-8 w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-sm font-semibold text-slate-700 transition hover:border-purple-300 hover:text-purple-600">
              View AI Track
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
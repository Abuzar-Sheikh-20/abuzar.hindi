import ProblemAccordion from "./ProblemAccordion";
import { SiHomepage } from "react-icons/si";
import { useState, useEffect } from "react";

export default function CaseStudyLayout({ data }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#F3EFE7] text-slate-900">
      <a
        href="/"
        className="fixed top-6 left-6 z-50 rounded-full bg-blue-900 px-5 py-2 text-sm text-white shadow-lg transition-all duration-300 hover:bg-red-500 hover:scale-105"
      >
        <SiHomepage className="inline-block mr-2" />
        Home
      </a>
      {/* HERO SECTION */}
      <section className="px-6 pt-16 flex items-center justify-center">
        <div
          className="w-full max-w-6xl rounded-[2rem] border border-slate-200 bg-white/95 shadow-2xl p-10 lg:p-14"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out",
          }}
        >
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* LEFT: TEXT */}
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">
                Case Study
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-950 leading-tight">
                {data.title}
              </h1>

              <p className="text-xl text-slate-600 font-medium">
                {data.subtitle}
              </p>

              <p className="text-lg text-slate-700 leading-relaxed max-w-xl">
                {data.overview.intro}
              </p>

              <ul className="space-y-2 pt-2">
                {data.overview.points?.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-red-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* CTA BUTTONS */}
              <div className="flex gap-3 pt-6">
                {data.links?.slice(0, 2).map((l, i) => (
                  <a
                    key={i}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className={`rounded-2xl px-5   py-3 text-sm font-semibold transition-all duration-300 ${
                        i === 0
                          ? "bg-red-600 text-white shadow-lg shadow-red-200/50 hover:bg-red-500"
                          : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      {l.label}
                    </button>
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT: IMAGE */}
            <div
              className="relative"
              style={{
                transform: isVisible ? "scale(1)" : "scale(0.95)",
                opacity: isVisible ? 1 : 0,
                transition: "all 0.8s ease-out 0.2s",
              }}
            >
              <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-r from-red-200 via-transparent to-slate-200 blur-2xl opacity-70" />
              <img
                src={data.mainImg}
                alt="Hero"
                className="relative w-full rounded-[1.75rem] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS & SOLUTIONS SECTION */}
      <section className="px-6 pt-16">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white shadow-xl p-10 lg:p-14">
          <div
            className="space-y-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease-out 0.3s",
            }}
          >
            <div className="max-w-2xl">
              <div className="inline-block rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">
                Challenges
              </div>
              <h2 className="mt-4 text-4xl font-bold text-slate-950">
                Problems I Faced
              </h2>
              <p className="mt-3 text-slate-600">
                Understanding the challenges and how we solved them with clarity
                and speed.
              </p>
            </div>

            <ProblemAccordion problems={data.problems} />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="px-6 pt-16">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white shadow-xl p-10 lg:p-14">
          <div
            className="space-y-12"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease-out 0.4s",
            }}
          >
            <div className="max-w-2xl">
              <div className="inline-block rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">
                Delivery
              </div>
              <h2 className="mt-4 text-4xl font-bold text-slate-950">
                What I Built
              </h2>
              <p className="mt-3 text-slate-600">
                Key features and capabilities delivered with a polished
                experience.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data.features.map((f, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.6s ease-out ${0.4 + i * 0.1}s`,
                  }}
                >
                  <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-red-500 via-blue-500 to-purple-600 opacity-20" />
                  <div className="relative">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-600 shadow-sm">
                      ✓
                    </div>
                    <p className="text-lg font-semibold text-slate-950">{f}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white shadow-xl p-10 lg:p-14">
          <div
            className="space-y-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease-out 0.5s",
            }}
          >
            <div className="max-w-2xl">
              <div className="inline-block rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">
                Stack
              </div>
              <h2 className="mt-4 text-4xl font-bold text-slate-950">
                Technologies Used
              </h2>
              <p className="mt-3 text-slate-600">
                Modern tools and frameworks chosen for speed, scalability, and
                polish.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {data.tech.map((t, i) => (
                <span
                  key={i}
                  className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-red-300 hover:shadow-lg"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "scale(1)" : "scale(0.95)",
                    transition: `all 0.5s ease-out ${0.5 + i * 0.08}s`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS SECTION */}
      <section className="px-6 pt-16">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white shadow-xl p-10 lg:p-14">
          <div
            className="space-y-12"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease-out 0.6s",
            }}
          >
            <div className="max-w-2xl">
              <div className="inline-block rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">
                Gallery
              </div>
              <h2 className="mt-4 text-4xl font-bold text-slate-950">
                Screenshots
              </h2>
              <p className="mt-3 text-slate-600">
                Visual walkthrough of the project.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {data.screenshots.map((s, i) => (
                <div
                  key={i}
                  className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(30px)",
                    transition: `all 0.6s ease-out ${0.6 + i * 0.1}s`,
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-3 p-6">
                    <h3 className="text-xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-red-600">
                      {s.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LINKS/CTA SECTION */}
      <section className="px-6 py-16">
        <div
          className="mx-auto max-w-6xl rounded-[2rem] bg-gradient-to-r from-red-500 via-blue-600 to-purple-600 p-12 text-center shadow-2xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out 0.7s",
          }}
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">Ready to explore?</h2>
            <p className="text-blue-100 mt-2 text-lg">
              Check out the live project and full details.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {data.links.map((l, i) => (
                <a
                  key={i}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="rounded-2xl bg-white px-8 py-3 text-sm font-bold text-red-600 transition duration-300 hover:bg-slate-50 hover:scale-105">
                    {l.label}
                  </button>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

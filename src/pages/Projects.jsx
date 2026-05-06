import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projectsData";

const Projects = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="bg-[#F3EFE7] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-red-500 text-center mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <img src={p.image} className="h-48 w-full object-cover rounded" />

              <h3 className="text-xl font-bold mt-4">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{p.description}</p>

              <div className="flex justify-between mt-4">
                <a href={p.link} target="_blank">
                  <button className="bg-blue-900 text-white px-3 py-1 rounded">
                    Live
                  </button>
                </a>

                <Link to={`/projects/${p.id}`}>
                  <button className="border px-3 py-1 rounded">
                    Case Study
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
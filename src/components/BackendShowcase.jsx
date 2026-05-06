import React from "react";
import { ShieldCheck, Database, Server, CloudUpload } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Authentication System",
    desc: "Secure authentication using JWT, protected routes, and role-based access control.",
  },
  {
    icon: <Server size={28} />,
    title: "Backend Systems",
    desc: "Building scalable backend systems with clean architecture and structured logic.",
  },
  {
    icon: <Database size={28} />,
    title: "API & Data Flow",
    desc: "Designing REST APIs, handling data flow, and ensuring efficient communication between client and server.",
  },
  {
    icon: <CloudUpload size={28} />,
    title: "Integrations",
    desc: "Integrating third-party services like file uploads, external APIs, and cloud-based tools.",
  },
];

const BackendShowcase = () => {
  return (
    <section className="bg-gray-700 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] border-b text-white w-full px-12 lg:px-12 py-24 md:py-32">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">
          Backend <span className="text-yellow-400">Systems</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Building scalable backend systems and APIs powering real-world
          applications.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-neutral-800 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:border-yellow-400"
          >
            <div className="text-yellow-400 mb-4">{item.icon}</div>

            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

            <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BackendShowcase;

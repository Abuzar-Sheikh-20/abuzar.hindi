import { useState } from "react";

export default function ProblemAccordion({ problems }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="space-y-4">
      {problems.map((p, i) => (
        <div
          key={i}
          className={`group border-2 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
            open === i
              ? "border-blue-400 bg-blue-50"
              : "border-gray-200 bg-white hover:bg-green-100"
          }`}
          onClick={() => setOpen(open === i ? null : i)}
        >
          {/* HEADER */}
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-start gap-4 flex-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 flex-shrink-0 ${
                  open === i
                    ? "bg-blue-500 text-white"
                    : "bg-blue-900 text-white"
                }`}
              >
                {i + 1}
              </div>

              <div>
                <h3
                  className={`text-lg font-semibold transition-colors duration-300 ${
                    open === i ? "text-blue-700" : "text-gray-900"
                  }`}
                >
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {p.points.length} key challenges
                </p>
              </div>
            </div>

            {/* ARROW ICON */}
            <div
              className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                open === i ? "rotate-180" : ""
              }`}
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>

          {/* CONTENT */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === i ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="px-6 pb-6 pt-0 space-y-4 border-t border-gray-200 mt-2">
              <div>
                <ul className="space-y-2">
                  {p.points.map((point, j) => (
                    <li key={j} className="flex gap-2 text-gray-700 text-base">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

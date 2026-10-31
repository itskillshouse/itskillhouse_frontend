import { createElement } from "react";
import {
  FaBriefcase,
  FaProjectDiagram,
  FaUsers,
  FaSmile,
} from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";

const stats = [
  { value: "5+", label: "Years of experience", icon: FaBriefcase },
  { value: "50+", label: "Projects completed", icon: FaProjectDiagram },
  { value: "10+", label: "Expert team members", icon: FaUsers },
  { value: "100%", label: "Client satisfaction", icon: FaSmile },
];

export default function AboutStats() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className="bg-white px-5 py-20 sm:py-24 lg:px-[7vw]"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`mb-10 max-w-2xl transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none sm:mb-14 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
            The difference we make
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Experience, measured in outcomes.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label, icon }, index) => (
            <article
              key={label}
              style={{ transitionDelay: isVisible ? `${index * 80}ms` : "0ms" }}
              className={`group rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/70 p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 motion-reduce:transform-none motion-reduce:transition-none sm:p-7 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <span className="mb-8 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-[#155DFC] transition-colors group-hover:bg-[#155DFC] group-hover:text-white">
                {createElement(icon, { "aria-hidden": true })}
              </span>
              <p className="text-4xl font-semibold tracking-tight text-[#155DFC] sm:text-5xl">
                {value}
              </p>
              <h3 className="mt-2 text-sm font-medium leading-6 text-slate-600">
                {label}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

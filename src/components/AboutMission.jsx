import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";

const AboutMission = () => {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-50 px-5 py-20 sm:py-24 lg:px-[7vw] lg:py-32"
    >
      <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

      <div
        className={`relative mx-auto grid max-w-7xl items-center gap-10 transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div>
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
            <span className="h-px w-9 bg-blue-600" />
            Our mission
          </div>
          <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Building skills and ideas for a{" "}
            <span className="text-[#155DFC]">digital future.</span>
          </h2>
        </div>

        <div className="rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-[0_20px_60px_-40px_rgba(21,93,252,0.35)] sm:p-9">
          <p className="text-base leading-8 text-slate-600 sm:text-lg">
            We make technology easier to learn and put to work. Through
            practical training and thoughtful digital solutions, we help
            people and businesses move forward with confidence.
          </p>
          <p className="mt-5 border-l-2 border-blue-500 pl-4 text-base font-medium leading-7 text-slate-800">
            Learn by doing. Build with purpose. Keep growing.
          </p>
          <Button
            size="lg"
            iconRight={<FaArrowRight />}
            className="mt-7 w-fit"
          >
            Discover More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;

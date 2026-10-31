import about1 from "../assets/aboust us/about1.webp";
import about2 from "../assets/aboust us/about2.webp";
import about3 from "../assets/aboust us/about3.webp";
import useScrollReveal from "../hooks/useScrollReveal";

export default function AboutStory() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-white px-5 py-20 sm:py-24 lg:px-[7vw] lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div
          className={`transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
            About IT Skill House
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
            Practical learning.{" "}
            <span className="text-[#155DFC]">Real progress.</span>
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            We bring learning and technology together. Our focus is hands-on
            computer education, useful digital skills, and work that solves
            real needs—not just looks good on paper.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            Every course and project is an opportunity to turn curiosity into
            confidence and ideas into something useful.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Learn by doing", "People first", "Built for growth"].map(
              (value) => (
                <span
                  key={value}
                  className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {value}
                </span>
              )
            )}
          </div>
        </div>

        <div
          className={`grid grid-cols-2 gap-3 transition-all delay-100 duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none sm:gap-4 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          <figure className="col-span-2 overflow-hidden rounded-3xl bg-blue-100">
            <img
              src={about1}
              alt="Students learning practical computer skills"
              loading="lazy"
              decoding="async"
              className="h-52 w-full object-cover transition-transform duration-700 hover:scale-[1.03] motion-reduce:transform-none sm:h-72"
            />
          </figure>
          <figure className="overflow-hidden rounded-2xl bg-blue-100">
            <img
              src={about2}
              alt="A learning session at IT Skill House"
              loading="lazy"
              decoding="async"
              className="h-36 w-full object-cover transition-transform duration-700 hover:scale-[1.03] motion-reduce:transform-none sm:h-48"
            />
          </figure>
          <figure className="overflow-hidden rounded-2xl bg-blue-100">
            <img
              src={about3}
              alt="Developing skills through hands-on practice"
              loading="lazy"
              decoding="async"
              className="h-36 w-full object-cover transition-transform duration-700 hover:scale-[1.03] motion-reduce:transform-none sm:h-48"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function PremiumSection() {
  return (
    <div className="min-h-screen bg-[#0B0D10] text-white px-6 md:px-16 py-20 font-sans">

      {/* HERO (Asymmetric Layout) */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-28">
        <div className="space-y-6">
          <p className="text-sm text-gray-400 tracking-wide uppercase">
            Next-gen SaaS Platform
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Build faster.
            <br />
            Ship smarter.
          </h1>
          <p className="text-gray-400 text-lg max-w-md">
            A powerful platform designed for developers who want speed, control,
            and beautiful workflows.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:opacity-90 transition">
              Get Started
            </button>
            <button className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/5 transition">
              Live Demo
            </button>
          </div>
        </div>

        {/* Visual Block */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-3xl blur-2xl" />
          <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl">
            <p className="text-gray-400 text-sm mb-4">Live Metrics</p>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Users</span>
                <span className="font-medium">12,430</span>
              </div>
              <div className="flex justify-between">
                <span>Growth</span>
                <span className="font-medium text-green-400">+23%</span>
              </div>
              <div className="flex justify-between">
                <span>Revenue</span>
                <span className="font-medium">$34,200</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENTO GRID */}
      <section className="grid md:grid-cols-3 gap-6 mb-28">
        <div className="col-span-2 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
          <h3 className="text-2xl font-semibold mb-3">Real-time Collaboration</h3>
          <p className="text-gray-400 max-w-lg">
            Work with your team seamlessly with live updates and instant sync.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
          <h3 className="text-xl font-semibold mb-3">Smart AI Tools</h3>
          <p className="text-gray-400">
            Automate workflows and enhance productivity with built-in AI.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
          <h3 className="text-xl font-semibold mb-3">Secure by Default</h3>
          <p className="text-gray-400">
            End-to-end encryption and enterprise-grade protection.
          </p>
        </div>

        <div className="col-span-2 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
          <h3 className="text-2xl font-semibold mb-3">Blazing Fast Performance</h3>
          <p className="text-gray-400 max-w-lg">
            Optimized infrastructure ensures ultra-fast load times and smooth UX.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative p-10 md:p-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-white to-transparent blur-2xl" />

        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to build something great?
        </h2>
        <p className="text-gray-400 mb-8">
          Start your journey today and experience a new level of productivity.
        </p>

        <button className="px-8 py-4 bg-white text-black rounded-xl font-medium hover:scale-105 transition-transform">
          Start Free Trial
        </button>
      </section>
    </div>
  );
}

import React from "react";

function FrameworkHero() {
  return (
    <section className="bg-[#f5f7fb] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Label */}
        <p className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-teal-700">
          Global Standards Framework
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-4xl md:text-6xl font-bold text-slate-950 leading-tight">
          The XportScore Framework
        </h2>

        {/* Subtitle */}
        <p className="mt-8 text-lg md:text-2xl text-slate-700">
          A structured private framework for evaluating business export
          readiness.
        </p>

        {/* Content Box */}
        <div className="mt-10 border-l-4 border-teal-600 bg-white/60 p-6 md:p-8">
          <p className="text-slate-800 leading-8 text-base md:text-xl">
            XportScore evaluates whether a business demonstrates readiness for
            export-facing activity. The assessment focuses on{" "}
            <span className="font-semibold">preparedness</span>, not export
            success prediction.
          </p>

          <p className="mt-3 text-slate-800 leading-8 text-base md:text-xl">
            The framework is built around 5 core pillars.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FrameworkHero;

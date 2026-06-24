import React from "react";

function HowXportscoreWorks() {
  return (
    <section className="w-full bg-[#f7f8fb] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full bg-[#9BE7E8] px-4 py-2 mb-8">
          <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-[#0B6B73]">
            Global Audit Protocol
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#0A0A0A] leading-tight">
          How XportScore Works
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl mx-auto text-base md:text-xl text-gray-600 leading-relaxed">
          A simple document-based export-readiness audit designed for
          businesses, Banks & Clientele to understand whether they are ready for
          global markets.
        </p>
      </div>
    </section>
  );
}

export default HowXportscoreWorks;

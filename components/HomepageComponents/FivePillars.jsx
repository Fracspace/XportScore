import React from "react";

function FivePillars() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[3px] text-teal-700">
              The Methodology
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#09122f]">
              The 5 Pillars of Export Readiness
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              We assess your business against five critical domains, each
              weighted to reflect its impact on your export success.
            </p>
          </div>

          {/* <button className="text-teal-700 font-medium flex items-center gap-2 hover:underline">
            Download Methodology Whitepaper
            <span>↗</span>
          </button> */}
        </div>

        {/* Pillars */}
        <div className="mt-12 border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {/* Card 1 */}
            <div className="border-r border-b lg:border-b-0 border-gray-200 p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 text-xl">
                ⚖️
              </div>

              <h3 className="mt-6 font-semibold text-[#09122f]">
                Business & Compliance
              </h3>

              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                IEC, RCMC, GST, and legal structure verification.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border-r border-b lg:border-b-0 border-gray-200 p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 text-xl">
                🧪
              </div>

              <h3 className="mt-6 font-semibold text-[#09122f]">
                Product Exportability
              </h3>

              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                HS Code accuracy, quality standards, and certifications.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border-r border-b lg:border-b-0 border-gray-200 p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 text-xl">
                📦
              </div>

              <h3 className="mt-6 font-semibold text-[#09122f]">
                Packaging & Labeling
              </h3>

              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                Transit durability and target market label compliance.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border-r border-b lg:border-b-0 border-gray-200 p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 text-xl">
                💳
              </div>

              <h3 className="mt-6 font-semibold text-[#09122f]">
                Pricing Readiness
              </h3>

              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                Incoterms mastery, margin analysis, and logistics cost.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 text-xl">
                🌍
              </div>

              <h3 className="mt-6 font-semibold text-[#09122f]">
                Market Readiness
              </h3>

              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                Buyer research, intelligence, and digital presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FivePillars;

import React from "react";

import {
  ShieldCheck,
  Package,
  ScanSearch,
  BadgeDollarSign,
  Globe
} from "lucide-react";

function CorePillars() {
  const pillars = [
    {
      icon: ShieldCheck,
      number: "PILLAR 01",
      title: "Business & Compliance Readiness",
      measure:
        "Basic business identity, organizational structure, and core legal documentation.",
      review:
        "Business registrations, tax compliance certificates, and operational permits."
    },
    {
      icon: Package,
      number: "PILLAR 02",
      title: "Product Exportability",
      measure:
        "Product clarity, market fit potential, and manufacturing supply readiness.",
      review:
        "Product categories, high-res photos, production capacity, and MOQ specifications."
    },
    {
      icon: ScanSearch,
      number: "PILLAR 03",
      title: "Packaging & Certification",
      measure:
        "Compliance with international labeling standards and necessary quality certifications.",
      review:
        "Labeling imagery, ingredient lists, and laboratory testing documentation."
    },
    {
      icon: BadgeDollarSign,
      number: "PILLAR 04",
      title: "Pricing & Commercial Readiness",
      measure:
        "Clarity of commercial terms and the transparency of the pricing model for global trade.",
      review:
        "Export pricing, international payment terms, and profit margin sustainability."
    },
    {
      icon: Globe,
      number: "PILLAR 05",
      title: "Market & Buyer Readiness",
      measure:
        "Measures the professional presentation and digital footprint presented to prospective overseas buyers.",
      review:
        "Target market strategy, company profile documents, and professional website presence."
    }
  ];

  return (
    <section className="bg-[#f4f5f9] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#07132D]">
            The 5 Core Pillars
          </h2>
          <p className="mt-3 text-gray-500 text-lg">
            The comprehensive methodology used for every XportScore audit.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <div
                key={index}
                className={`bg-white border border-gray-200 p-8 min-h-[340px]
                  ${index === 4 ? "md:col-span-2 lg:col-span-2" : ""}`}
              >
                {/* Top Row */}
                <div className="flex items-center justify-between mb-10">
                  <Icon size={28} className="text-[#006D77]" strokeWidth={2} />

                  <span className="text-[11px] tracking-[2px] font-semibold text-[#07132D]">
                    {pillar.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-semibold text-[#07132D] leading-tight mb-8">
                  {pillar.title}
                </h3>

                {/* What it measures */}
                <div className="mb-6">
                  <p className="text-[11px] tracking-[2px] uppercase font-semibold text-[#6D78A6] mb-2">
                    What It Measures
                  </p>

                  <p className="text-gray-700 leading-7">{pillar.measure}</p>
                </div>

                {/* What we review */}
                <div>
                  <p className="text-[11px] tracking-[2px] uppercase font-semibold text-[#6D78A6] mb-2">
                    What We Review
                  </p>

                  <p className="text-gray-700 leading-7">{pillar.review}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CorePillars;

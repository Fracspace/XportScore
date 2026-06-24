import React from "react";
import { ShieldCheck } from "lucide-react";

function ContactHero() {
  return (
    <section className="bg-[#041B4D] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#083B72] px-4 py-2">
            <ShieldCheck size={14} className="text-[#19B6B8]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white">
              Institutional Support
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Contact XportScore
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300">
            Have a question about assessments, partnerships, certificate
            verification or business onboarding? Our specialized trade audit
            team is ready to assist your global expansion.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;

import React from "react";
import Link from "next/link";

function SupportCTA() {
  return (
    <section className="bg-[#031B4E] py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Still have questions?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
          Contact our support team for technical inquiries or join our partner
          network to integrate XportScore into your institutional workflow.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/startassessment"
            className="rounded-md bg-[#0F8B8D] px-8 py-3 text-sm font-medium text-white transition-all hover:bg-[#0d7778]"
          >
            Get Your XportScore
          </Link>

          <Link
            href="/contact"
            className="rounded-md border border-[#0F8B8D] px-8 py-3 text-sm font-medium text-white transition-all hover:bg-[#0F8B8D]/10"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SupportCTA;

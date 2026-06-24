"use client"

import { useRouter } from "next/navigation";
import React from "react";

function ReadyToBenchMark() {
  const router = useRouter();
  return (
    <section className="bg-[#f5f6fa] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#010816] rounded-2xl px-8 py-16 md:px-16 md:py-20 text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Benchmark Your Business?
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-8 mb-10">
            Join thousands of businesses globally that use the XportScore
            framework to demonstrate their readiness to international partners.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={()=>router.push('/startassessment')} className="bg-[#007681] cursor-pointer hover:bg-[#00646d] text-white font-semibold px-8 py-4 rounded transition duration-300">
              Start Free Assessment
            </button>

            {/* <button className="bg-[#1A2233] hover:bg-[#242d42] text-white font-semibold px-8 py-4 rounded transition duration-300">
              Download Framework PDF
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReadyToBenchMark;

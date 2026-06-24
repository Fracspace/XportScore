"use client"

import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import progressImg from "../../assets/progressImg.png";
import { useRouter } from "next/navigation";

function VisualRediness() {
  const router = useRouter();
  return (
    <section className="bg-[#f5f6fa] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 overflow-hidden rounded-lg border border-gray-200 bg-white">
          {/* Left Content */}
          <div className="lg:col-span-4 p-8 lg:p-10">
            <h2 className="text-4xl font-bold text-[#07132D] leading-tight mb-8">
              Visual Readiness
              <br />
              Progress
            </h2>

            <p className="text-gray-500 leading-8 mb-8">
              Our reports use rhythmic horizontal dividers and progress gauges
              that suggest a clear path to global markets. Every metric is
              backed by trade data.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <CheckCircle
                  size={18}
                  className="text-[#006D77] fill-[#006D77] text-white"
                />
                <span className="text-[#07132D]">
                  Benchmarked against WTO guidelines
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle
                  size={18}
                  className="text-[#006D77] fill-[#006D77] text-white"
                />
                <span className="text-[#07132D]">
                  Accepted by 50+ global trading partners
                </span>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="lg:col-span-4 relative min-h-[320px]">
            <Image
              src={progressImg}
              alt="Dashboard Preview"
              fill
              className="object-cover"
            />
          </div>

          {/* Right CTA Card */}
          <div className="lg:col-span-4 bg-[#020817] p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-semibold text-white mb-5">
                Ready to audit?
              </h3>

              <p className="text-gray-300 leading-7 mb-8">
                Stop guessing your readiness level. Join 500+ exporters who use
                XportScore to secure international contracts.
              </p>

              <div className="bg-[#0D1D42] border border-[#1C315D] p-5 mb-8">
                <h4 className="text-[#8EE5E7] font-semibold mb-1">
                  128-bit Encryption
                </h4>

                <p className="text-gray-400 text-sm">
                  Your trade data is secure and confidential.
                </p>
              </div>
            </div>

            <button onClick={()=>router.push('/startassessment')} className="w-full cursor-pointer bg-[#9ADFE2] hover:bg-[#88d6da] text-[#07132D] font-semibold py-4 transition">
              Start Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisualRediness;

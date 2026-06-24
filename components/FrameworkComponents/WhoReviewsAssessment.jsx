import React from "react";
import {
  ShieldCheck,
  FileCheck,
  BadgeCheck,
  Settings,
  AlertTriangle
} from "lucide-react";
import frameworkImg from "../../assets/frameworkImg.png";
import Image from "next/image";

function WhoReviewsAssessment() {
  const steps = [
    {
      number: "01",
      title: "Document pre-check",
      description:
        "Initial verification of file integrity and completeness by our automated ingestion engine.",
      icon: null
    },
    {
      number: "02",
      title: "Assessment analyst review",
      description:
        "Subject matter experts evaluate the qualitative aspects of your submission and documentation.",
      icon: null
    },
    {
      number: "03",
      title: "Senior reviewer approval",
      description:
        "Final validation of the score weightings to ensure standard consistency across the industry.",
      icon: null
    },
    {
      title: "Certificate issuance",
      description:
        "Secure verifiable PDF certificate and digital badge are generated and delivered.",
      icon: Settings
    }
  ];
  return (
    <section className="bg-[#f5f6fa] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-[#07132D] mb-6">
              Who Reviews the Assessment?
            </h2>

            <p className="text-gray-500 leading-8 max-w-lg mb-12">
              Our multi-stage verification process ensures the integrity of
              every XportScore issued. Each audit passes through a rigorous
              chain of custody.
            </p>

            <div className="space-y-10">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-5">
                  {/* Number/Icon */}
                  <div className="flex-shrink-0">
                    {step.number ? (
                      <div className="w-12 h-12 rounded-xl bg-[#071B4B] text-white flex items-center justify-center font-bold">
                        {step.number}
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-[#006D77] text-white flex items-center justify-center">
                        <step.icon size={20} />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-semibold text-lg text-[#07132D] mb-1">
                      {step.title}
                    </h3>

                    <p className="text-gray-500 leading-7">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Card */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={frameworkImg}
                alt="Assessment Review"
                className="w-full h-full object-cover"
              />

              {/* Quote Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-md p-6 rounded">
                <p className="text-white italic leading-7 text-sm md:text-base">
                  “The XportScore methodology provides a critical, objective
                  lens for companies looking to transition from domestic players
                  to global contenders.”
                </p>

                <p className="text-[#66D4D6] font-semibold mt-4">
                  — Director of Global Trade Compliance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-20 border border-red-200 bg-red-50 p-8">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 bg-red-700 flex items-center justify-center text-white flex-shrink-0">
              <AlertTriangle size={22} />
            </div>

            <div>
              <h3 className="text-red-700 font-semibold uppercase tracking-wide mb-4">
                Important Regulatory Disclaimer
              </h3>

              <p className="text-red-800 leading-8">
                XportScore is a private audit service provided for business
                readiness evaluation and commercial credibility purposes. It is
                a <strong>supporting audit and does not replace</strong>{" "}
                official government approvals, mandatory statutory
                registrations, or regulatory export licenses required by your
                local jurisdiction or target market authorities. Use the
                XportScore framework as a preparatory tool to ensure your
                business meets the high standards expected by global buyers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoReviewsAssessment;

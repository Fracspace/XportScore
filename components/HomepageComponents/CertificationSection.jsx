"use client";

import { useRouter } from "next/navigation";

export default function CertificationSection() {
  const router = useRouter();
  const steps = [
    {
      number: "1",
      title: "Apply Online",
      description:
        "Submit basic business details and complete the secure payment of USD 299.",
      color: "bg-[#020826]"
    },
    {
      number: "2",
      title: "Upload Artifacts",
      description:
        "Provide the required documentation and images for our auditors to review.",
      color: "bg-[#020826]"
    },
    {
      number: "3",
      title: "Receive Score",
      description:
        "Get your detailed Audit Report, XportScore, and Verifiable Certificate within 72 hours.",
      color: "bg-[#0F6B6E]"
    }
  ];
  return (
    <section className="bg-[#f5f7fa] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold mb-14">
          How to Get Certified
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div
                className={`${step.color} w-14 h-14 rounded-md flex items-center justify-center text-white font-bold text-lg mx-auto mb-4`}
              >
                {step.number}
              </div>

              <h3 className="font-semibold text-sm mb-3">{step.title}</h3>

              <p className="text-gray-500 text-sm leading-6 max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing Card */}
        <div className="flex justify-center mb-20">
          <div className="bg-white shadow-lg rounded-md overflow-hidden max-w-sm w-full">
            {/* Top */}
            <div className="bg-[#020826] text-white text-center py-8 px-6">
              <p className="uppercase text-xs tracking-wider text-gray-300">
                Standard Assessment
              </p>

              <div className="mt-4">
                <span className="text-lg">USD</span>
                <span className="text-5xl font-bold ml-1">299</span>
              </div>

              <p className="mt-3 text-sm text-gray-300">
                Comprehensive Private Audit & Certification
              </p>
            </div>

            {/* Features */}
            <div className="p-8">
              <ul className="space-y-4 text-sm text-gray-600">
                <li>✓ Complete 5 Pillar Readiness Audit</li>
                <li>✓ Verifiable XportScore Certificate</li>
                <li>✓ Detailed 12 Page Audit Insights Report</li>
                <li>✓ Strategic 90-Day Action Plan</li>
                <li>✓ QR Code for Web & PDF Verification</li>
              </ul>

              <button
                onClick={() => router.push("/startassessment")}
                className="w-full cursor-pointer mt-8 bg-[#020826] text-white py-3 text-sm font-medium hover:bg-[#08163a] transition"
              >
                Start My Assessment
              </button>
            </div>
          </div>
        </div>

        {/* Verify Certificate */}
        {/* <div className="bg-white border rounded-md p-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2">
                Verify a Certificate
              </h3>

              <p className="text-gray-500 text-sm">
                Are you a buyer or partner looking to verify an XportScore?
                Enter the Certificate ID or scan the QR code to view the live
                status.
              </p>
            </div>

            
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="text"
                placeholder="e.g. XS-24-000789"
                className="border px-4 py-3 rounded outline-none focus:ring-2 focus:ring-cyan-600 w-full sm:w-64"
              />

              <button className="bg-[#0F6B6E] text-white px-6 py-3 rounded hover:bg-[#0b5759] transition">
                Verify Now
              </button>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            Instant verification directly from the private audit intelligence.
          </p>
        </div> */}
      </div>
    </section>
  );
}

import {
  ArrowRight,
  FileText,
  ShieldCheck,
  BadgeCheck,
  FileSearch,
  Calendar,
  Globe
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-[#f3f5fa]">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <div className="inline-flex rounded-full bg-cyan-200 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-900">
              Private • Independent • QR-Verifiable
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-[#08112e] md:text-5xl">
              Before You Export,
              <br />
              Get Your XportScore.
            </h1>

            <p className="mt-6 max-w-lg text-gray-600">
              A private export-readiness audit, score and certificate for
              businesses planning to enter global markets. Validate your
              readiness before investing capital in international trade.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="flex items-center justify-center gap-3 bg-[#020820] px-8 py-4 font-semibold text-white transition hover:bg-black">
                Get Your XportScore — USD 299
                <ArrowRight size={18} />
              </button>

              <button className="flex items-center justify-center gap-3 border border-gray-400 bg-white px-8 py-4 font-semibold text-[#08112e] transition hover:bg-gray-50">
                View Sample Report
                <FileText size={18} />
              </button>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-lg border bg-white p-6 shadow-xl">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-[#08112e]">
                    Export Readiness
                  </h3>

                  <p className="text-xs text-gray-500">
                    Certificate ID: XS-24-000789
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center bg-gray-100">
                  QR
                </div>
              </div>

              <div className="my-6 border-t" />

              {/* Score Circle */}
              <div className="flex flex-col items-center">
                <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-[8px] border-teal-700">
                  <div className="text-center">
                    <div className="text-5xl font-semibold text-[#08112e]">
                      76
                    </div>

                    <div className="text-sm font-medium text-gray-500">
                      OF 100
                    </div>
                  </div>
                </div>

                <span className="mt-4 rounded-full bg-teal-700 px-4 py-1 text-xs font-bold text-white">
                  EXPORT READY
                </span>
              </div>

              <div className="my-6 border-t" />

              {/* Footer */}
              <div className="flex justify-between text-xs">
                <div>
                  <p className="text-gray-500">Validity</p>
                  <p className="font-semibold">18 Dec 2026</p>
                </div>

                <div className="text-right">
                  <p className="text-gray-500">Assessment Type</p>
                  <p className="font-semibold">Private Audit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Feature Bar */}
      <div className="bg-[#020820] py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 text-center text-white md:grid-cols-3 lg:grid-cols-6">
          <Feature
            icon={<ShieldCheck size={20} />}
            title="Private Readiness Audit"
          />

          <Feature icon={<BadgeCheck size={20} />} title="Score Out Of 100" />

          <Feature
            icon={<ShieldCheck size={20} />}
            title="QR-Verifiable Seal"
          />

          <Feature
            icon={<FileSearch size={20} />}
            title="Detailed Audit Report"
          />

          <Feature icon={<Calendar size={20} />} title="6-Month Validity" />

          <Feature icon={<Globe size={20} />} title="Global Standard" />
        </div>
      </div>
    </section>
  );
}

function Feature({icon, title}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div>{icon}</div>

      <p className="text-xs font-medium uppercase tracking-wide">{title}</p>
    </div>
  );
}

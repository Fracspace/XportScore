import React from "react";

function AssessmentSteps() {
  const steps = [
    {
      id: 1,
      title: "Start Your Assessment",
      description:
        "Complete a short application including your business name, country, and business type.",
      items: [
        "Business URL",
        "Export Status",
        "Product Category",
        "Target Markets"
      ]
    },
    {
      id: 2,
      title: "Secure Payment",
      description:
        "Audit fee for global businesses. Instant receipt and secure digital instructions sent via encrypted email.",
      price: "USD 299"
    },
    {
      id: 3,
      title: "Submit Documents",
      description:
        "Upload relevant evidence to support your readiness assessment.",
      items: [
        "Business Registration",
        "Product Catalogues & Pricing",
        "Export Pricing List",
        "ISO / Trade Certifications"
      ]
    },
    {
      id: 4,
      title: "XportScore Pre-Check",
      description:
        "Our internal system validates file integrity and maps information against readiness framework."
    },
    {
      id: 5,
      title: "Analyst Review",
      description:
        "Documents are meticulously reviewed across export readiness pillars."
    },
    {
      id: 6,
      title: "Senior Reviewer Approval",
      description:
        "A secondary validation layer ensures consistency and fairness."
    }
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gray-200"></div>

          {steps.map((step) => (
            <div key={step.id} className="relative flex gap-6 pb-10">
              {/* Number */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-8 h-8 rounded-md bg-slate-900 text-white flex items-center justify-center text-sm font-semibold">
                  {step.id}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 border border-gray-200 rounded-md p-5 bg-white">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {step.title}
                  </h3>

                  {step.price && (
                    <span className="font-semibold text-gray-700">
                      {step.price}
                    </span>
                  )}
                </div>

                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {step.description}
                </p>

                {step.items && (
                  <div className="grid md:grid-cols-2 gap-2 mt-4">
                    {step.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Final Step */}
          <div className="relative flex gap-6">
            <div className="relative z-10">
              <div className="w-8 h-8 rounded-md bg-teal-600 text-white flex items-center justify-center text-sm font-semibold">
                7
              </div>
            </div>

            <div className="flex-1 bg-cyan-100 border border-cyan-300 rounded-md p-5">
              <h3 className="font-semibold text-gray-900">
                Issuance of Certification
              </h3>

              <div className="mt-3 bg-white rounded-md p-4 border border-cyan-200">
                <h4 className="font-medium text-gray-900">
                  Your Final Deliverables
                </h4>

                <p className="text-sm text-gray-600 mt-1">
                  Comprehensive Report, Verified Score, & Certification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AssessmentSteps;

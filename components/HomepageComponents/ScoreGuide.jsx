const scoreData = [
  {
    range: "85–100",
    title: "Elite Readiness",
    description:
      "Full compliance, robust product standards, and high market intelligence. Ready for large-scale global contracts.",
  },
  {
    range: "70–84",
    title: "Export Ready",
    description:
      "Strong readiness across key pillars. Minor refinements recommended to optimize costs or efficiency.",
  },
  {
    range: "50–69",
    title: "Foundation Level",
    description:
      "Core business is stable, but significant gaps in export documentation or product specifics identified.",
  },
  {
    range: "30–49",
    title: "Improving Phase",
    description:
      "Early stage of export planning. Requires focus on fundamental compliance and product certification.",
  },
  {
    range: "0–29",
    title: "Not Export Ready",
    description:
      "Critical gaps that pose high risk for international trade. Urgent foundational work needed.",
  },
];

export default function ScoreGuide() {
  return (
    <section className="bg-[#071c42] py-12 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-white text-2xl sm:text-3xl font-bold">
            Understanding Your Score
          </h2>

          <p className="text-gray-300 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            The XportScore benchmark helps you understand exactly where you
            stand against global expectations.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-4">
          {scoreData.map((item, index) => (
            <div
              key={index}
              className="border border-[#3a4f73] rounded-md px-4 py-5 bg-transparent"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                {/* Score */}
                <div className="text-[#76e5ff] text-2xl font-medium min-w-[90px]">
                  {item.range}
                </div>

                {/* Title */}
                <div className="text-white font-semibold min-w-[160px]">
                  {item.title}
                </div>

                {/* Description */}
                <div className="text-gray-300 text-sm leading-relaxed flex-1">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
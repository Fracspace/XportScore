import React from "react";
import {
  Truck,
  Package,
  BadgeCheck,
  Building2,
  BarChart3,
  Landmark,
  ShieldCheck,
  CalendarDays,
  Network,
  BriefcaseBusiness,
  Wallet,
  Building
} from "lucide-react";

function WhoCanPartner() {
  const partnerTypes = [
    {
      title: "Logistics Companies",
      icon: Truck
    },
    {
      title: "Freight Forwarders",
      icon: Package
    },
    {
      title: "Customs Brokers",
      icon: BadgeCheck
    },
    {
      title: "Banks & NBFCs",
      icon: Landmark
    },
    {
      title: "Export Consultants",
      icon: BarChart3
    },
    {
      title: "Trade Finance",
      icon: Wallet
    },
    {
      title: "Chambers of Commerce",
      icon: Building
    },
    {
      title: "Business Associations",
      icon: BriefcaseBusiness
    },
    {
      title: "Packaging Companies",
      icon: Package
    },
    {
      title: "Certification Experts",
      icon: ShieldCheck
    },
    {
      title: "Trade Fair Organisers",
      icon: CalendarDays
    },
    {
      title: "B2B Platforms",
      icon: Network
    }
  ];
  return (
    <section className="bg-[#F5F7FA] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Who Can Partner With XportScore?
          </h2>

          <p className="mt-4 text-slate-600">
            XportScore is suitable for organisations that work with exporters,
            manufacturers, SMEs and global trade businesses. Join a community of
            institutional leaders.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partnerTypes.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg"
              >
                <Icon
                  size={26}
                  className="mb-5 text-teal-600 transition group-hover:scale-110"
                />

                <h3 className="text-lg font-medium text-slate-900">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhoCanPartner;

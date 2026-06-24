import PartnerModels from "@/components/PartnersComponents/PartnerModels";
import PartnersHero from "@/components/PartnersComponents/PartnersHero";
import WhoCanPartner from "@/components/PartnersComponents/WhoCanPartner";
import React from "react";

function Partners() {
  return (
    <div>
      <PartnersHero />
      <WhoCanPartner />
      <PartnerModels />
    </div>
  );
}

export default Partners;

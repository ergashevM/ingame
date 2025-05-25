import AboutService from "@/components/AboutService";
import CallToAction from "@/components/CallToAction";
import ComputerCare from "@/components/ComputerCare";
import Footer from "@/components/Footer";
import Maintenance from "@/components/Maintenance";
import Navigation from "@/components/Navigation";
import WhyRegularMaintenance from "@/components/RegularMaintenance";
import SelfRepairProblems from "@/components/SelfRepair";
import ServiceSteps from "@/components/ServiceSteps";
import ServicePackages from "@/components/servicePackages";
import React from "react";

const SectionTwo = () => {
  return (
    <div>
      <Navigation />
      <Maintenance />
      <ComputerCare />
      <SelfRepairProblems />
      <WhyRegularMaintenance/>
      <ServicePackages/>
      <AboutService/>
      <ServiceSteps/>
      <CallToAction/>
      <Footer/>
    </div>
  );
};

export default SectionTwo;

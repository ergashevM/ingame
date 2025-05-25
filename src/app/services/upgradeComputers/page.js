import BlogNews from "@/components/BlogNews";
import CallToAction from "@/components/CallToAction";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Testimonials from "@/components/Testimonials";
import UpgradeService from "@/components/Upgrade";
import WhatWeDoBetter from "@/components/WhatWeDoBetter";
import React from "react";

const SectionOne = () => {
  return (
    <div>
      <Navigation />
      <UpgradeService />
      <WhatWeDoBetter />
      <Testimonials />
      <FAQ />
      <BlogNews />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default SectionOne;

import AboutCompany from "@/components/AboutCompany";
import AboutFounder from "@/components/AboutFounder";
import CallToAction from "@/components/CallToAction";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import Guarantees from "@/components/Guarantees";
import Navigation from "@/components/Navigation";
import PaymentAndDelivery from "@/components/PaymentAndDelivery";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

const About = () => {
  return (
    <div>
      <Navigation />
      <AboutCompany />
      <AboutFounder />
      <WhyChooseUs />
      <Testimonials />
      <PaymentAndDelivery />
      <Guarantees />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default About;

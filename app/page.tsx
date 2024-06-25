import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GalleryFeature from "@/components/GalleryFeature";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
        <Hero />
        <FeaturesAccordion />
        <Pricing />
        <GalleryFeature />
        <FAQ />
        <CTA />
      <Footer />
    </>
  );
}
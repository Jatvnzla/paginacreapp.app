import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { Pricing } from "@/components/pricing";
import { TechSolutions } from "@/components/tech-solutions";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <Pricing />
      <TechSolutions />
      <Testimonials />
      {/* <Portfolio /> */}
      <Contact />
    </div>
  );
}

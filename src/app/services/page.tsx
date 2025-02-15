import { ServicesSection } from "@/components/services-section"
import { CTASection } from "@/components/cta-section"

export default function ServicesPage() {
  return (
    <div className="space-y-16 md:space-y-32">
      <section className="container py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Our Services</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
        At Mind Mechanics, we offer a wide variety of healing services designed to support your mental, emotional, and physical well-being. Explore our services and find the right fit for you.

        </p>
      </section>
      <ServicesSection showTitle={false} />
      <CTASection />
    </div>
  )
}


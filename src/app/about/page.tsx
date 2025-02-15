"use client"

import { HeroStory } from "@/components/about/hero-story"
import { FounderProfile } from "@/components/about/founder-profile"
import { Philosophy } from "@/components/about/philosophy"
import { WhyChooseUs } from "@/components/about/why-choose-us"

export default function AboutPage() {
  return (
    <div>
      <HeroStory />
      <FounderProfile />
      <Philosophy />
      <WhyChooseUs />
    </div>
  )
}


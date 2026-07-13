import { HeroSection } from "@/components/hero-section"
import { Problema } from "@/components/sections/problema"
import { Beneficios } from "@/components/sections/beneficios"
import { ComoFunciona } from "@/components/sections/como-funciona"
import { Funcionalidades } from "@/components/sections/funcionalidades"
import { Faq } from "@/components/sections/faq"
import { SiteFooter } from "@/components/sections/site-footer"

export default function Home() {
  return (
    <>
      <HeroSection />
      <Problema />
      <Beneficios />
      <ComoFunciona />
      <Funcionalidades />
      <Faq />
      <SiteFooter />
    </>
  )
}

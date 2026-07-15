import { HeroSection } from "@/components/hero-section"
import { Problema } from "@/components/sections/problema"
import { AntesDepois } from "@/components/sections/antes-depois"
import { Beneficios } from "@/components/sections/beneficios"
import { ComoFunciona } from "@/components/sections/como-funciona"
import { Funcionalidades } from "@/components/sections/funcionalidades"
import { Autor } from "@/components/sections/autor"
import { ListaEspera } from "@/components/sections/lista-espera"
import { Faq } from "@/components/sections/faq"
import { SiteFooter } from "@/components/sections/site-footer"

export default function Home() {
  return (
    <>
      <HeroSection />
      <Problema />
      <AntesDepois />
      <Beneficios />
      <ComoFunciona />
      <Funcionalidades />
      <Autor />
      <ListaEspera />
      <Faq />
      <SiteFooter />
    </>
  )
}

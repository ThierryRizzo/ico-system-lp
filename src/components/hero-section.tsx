"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"
import { basePath } from "@/lib/base-path"
import { Button } from "@/components/ui/button"

export const HeroSection = () => {
    return (
        <div>
            <header>
                <nav className="w-full border-b border-dashed bg-white backdrop-blur dark:bg-zinc-950/50">
                    <div className="m-auto max-w-5xl px-6">
                        <div className="flex items-center justify-between py-3 lg:py-4">
                            <a
                                href="#"
                                aria-label="ICO System"
                                className="flex items-center">
                                <Logo />
                            </a>

                            <Button size="sm">
                                <span>Começar teste grátis</span>
                            </Button>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                <section className="relative isolate overflow-hidden bg-[#0a1a5c] text-white">
                    <HeroBackground />
                    <div className="relative z-10 mx-auto max-w-5xl px-6 pt-16 pb-10 lg:pt-20 lg:pb-12">
                        <div className="relative z-10 mx-auto max-w-2xl text-center">
                            <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">Cada gota conta. Nenhuma se perde.</h1>
                            <p className="mx-auto my-8 max-w-2xl text-lg text-balance text-white/80">
                                Rastreie cada reagente e equipamento em um histórico que ninguém pode alterar. Você sabe onde está, quem pegou e quanto se gastou.
                            </p>

                            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                                <Button
                                    size="lg"
                                    className="bg-white text-primary hover:bg-white/90">
                                    <span>Começar teste grátis</span>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
                                    <span>Agendar demonstração</span>
                                </Button>
                            </div>
                            <p className="mt-4 text-sm text-white/70">Sem cartão de crédito e sem instalar nada.</p>
                        </div>
                    </div>

                    <div className="relative z-10 mx-auto max-w-5xl px-6">
                        <div className="relative h-[19rem] overflow-hidden rounded-t-xl border border-b-0 border-white/15 shadow-2xl shadow-zinc-950/40 ring-1 ring-black/5 lg:h-[23rem]">
                            <Image
                                className="object-cover object-top"
                                src={`${basePath}/screens/dashboard.jpg`}
                                alt="Dashboard do ICO System com indicadores de eventos, inconsistências e custos"
                                fill
                                sizes="(max-width: 1024px) 100vw, 1024px"
                                priority
                                unoptimized
                            />
                        </div>
                    </div>
                </section>

                <section className="relative z-10 bg-[#0a1a5c] py-8">
                    <div className="m-auto max-w-5xl px-6">
                        <h2 className="text-center text-lg font-medium text-balance text-white/75">
                            Feito para a rotina de laboratórios de anatomia patológica, imuno-histoquímica e diagnóstico.
                        </h2>
                    </div>
                </section>
            </main>
        </div>
    )
}

export function HeroBackground() {
    return (
        <div
            aria-hidden
            className="absolute inset-0 -z-10 overflow-hidden">
            {/* Base em degradê azul */}
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#0a1a5c_0%,#123fb5_50%,#1e63e6_100%)]" />

            {/* Brilho diagonal que percorre a tela */}
            <div className="absolute inset-0 bg-[length:200%_200%] bg-[linear-gradient(120deg,transparent_0%,rgba(125,181,255,0.35)_25%,transparent_45%,rgba(139,150,255,0.35)_70%,transparent_100%)] opacity-70 mix-blend-screen animate-[ico-pan_18s_ease-in-out_infinite] motion-reduce:animate-none" />

            {/* Auroras que flutuam (as "ondas" do mesh) */}
            <div className="absolute -left-[15%] -top-[20%] size-[42rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.6),transparent_60%)] blur-3xl mix-blend-screen animate-[ico-blob1_22s_ease-in-out_infinite] motion-reduce:animate-none" />
            <div className="absolute -right-[15%] top-[5%] size-[38rem] rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.55),transparent_60%)] blur-3xl mix-blend-screen animate-[ico-blob2_27s_ease-in-out_infinite] motion-reduce:animate-none" />
            <div className="absolute left-[25%] -bottom-[25%] size-[44rem] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.55),transparent_60%)] blur-3xl mix-blend-screen animate-[ico-blob3_31s_ease-in-out_infinite] motion-reduce:animate-none" />

            {/* Textura de tecido/malha */}
            <svg className="absolute inset-0 size-full opacity-[0.12] mix-blend-overlay">
                <filter id="ico-noise">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.9"
                        numOctaves="2"
                        stitchTiles="stitch"
                    />
                </filter>
                <rect
                    width="100%"
                    height="100%"
                    filter="url(#ico-noise)"
                />
            </svg>
        </div>
    )
}

export const Logo = ({ className }: { className?: string }) => {
    return (
        <Image
            src={`${basePath}/logo.png`}
            alt="ICO System"
            width={128}
            height={31}
            priority
            unoptimized
            className={cn("h-7 w-auto", className)}
        />
    )
}

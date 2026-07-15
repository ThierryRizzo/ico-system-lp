"use client"

import Image from "next/image"
import { Sparkles, TrendingDown, Droplets, Feather } from "lucide-react"

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

                            <div className="flex items-center gap-2 sm:gap-3">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="hidden sm:inline-flex"
                                    onClick={() => document.getElementById("apresentacao")?.scrollIntoView({ behavior: "smooth" })}>
                                    <span>Agendar demonstração</span>
                                </Button>
                                <Button
                                    size="sm"
                                    onClick={() => document.getElementById("lista")?.scrollIntoView({ behavior: "smooth" })}>
                                    <span>Entrar na lista</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                <section className="relative isolate overflow-hidden bg-[#0a1a5c] text-white">
                    <HeroBackground />
                    <div className="relative z-10 mx-auto max-w-5xl px-6 pt-16 pb-10 lg:pt-20 lg:pb-12">
                        <div className="relative z-10 mx-auto max-w-2xl text-center">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur">
                                <Sparkles className="size-4 text-blue-200" />
                                Lista de espera aberta · 70% de desconto de lançamento
                            </div>

                            <h1 className="text-balance text-4xl font-semibold md:text-5xl">Do controle de almoxarifado ao uso operacional no laboratório</h1>
                            <p className="mx-auto my-8 max-w-2xl text-lg text-balance text-white/80">
                                Cada gota conta. Acompanhe reagentes, insumos e equipamentos desde o recebimento até o consumo, movimentação ou descarte, com histórico rastreável e acesso 100% online.
                            </p>

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    const email = (e.currentTarget.querySelector("input[type=email]") as HTMLInputElement | null)?.value ?? ""
                                    const listaEmail = document.getElementById("lista-email") as HTMLInputElement | null
                                    if (listaEmail) listaEmail.value = email
                                    document.getElementById("lista")?.scrollIntoView({ behavior: "smooth" })
                                }}
                                className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row">
                                <input
                                    type="email"
                                    required
                                    placeholder="Seu melhor e-mail"
                                    aria-label="E-mail"
                                    className="h-11 flex-1 rounded-lg border border-white/25 bg-white/10 px-4 text-white outline-none placeholder:text-white/60 focus:border-white/60 focus:bg-white/15"
                                />
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="h-11 bg-white px-6 text-primary hover:bg-white/90">
                                    <span>Entrar na lista</span>
                                </Button>
                            </form>
                            <p className="mt-3 text-sm text-white/70">Vagas limitadas · Sem cartão de crédito · Cancele quando quiser</p>
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

                <section className="relative z-10 bg-[#0a1a5c] pb-20 pt-14 text-white">
                    <div className="mx-auto max-w-3xl px-6 text-center">
                        <h2 className="text-balance text-2xl font-semibold md:text-3xl">
                            Você não abriu um laboratório para caçar frasco perdido nem justificar desperdício.
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-balance text-white/70">
                            No fim do mês, o que pesa não é só o insumo que vazou. É a sensação de não ter controle. O ICO System devolve isso: menos gasto, menos retrabalho e a tranquilidade de saber que está tudo registrado.
                        </p>
                    </div>
                    <div className="mx-auto mt-12 grid max-w-4xl gap-6 px-6 sm:grid-cols-3">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
                            <div className="flex size-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                                <TrendingDown className="size-5" />
                            </div>
                            <h3 className="mt-5 font-semibold">Menos custo</h3>
                            <p className="mt-2 text-sm leading-relaxed text-white/65">Ver para onde vai cada real gasto em insumo e equipamento é o primeiro passo para gastar menos.</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
                            <div className="flex size-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                                <Droplets className="size-5" />
                            </div>
                            <h3 className="mt-5 font-semibold">Zero desperdício invisível</h3>
                            <p className="mt-2 text-sm leading-relaxed text-white/65">O que sai além do previsto aparece na tela, com motivo. O desperdício deixa de passar despercebido.</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
                            <div className="flex size-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                                <Feather className="size-5" />
                            </div>
                            <h3 className="mt-5 font-semibold">Fim da desorganização</h3>
                            <p className="mt-2 text-sm leading-relaxed text-white/65">Sem planilha bagunçada nem &ldquo;quem pegou isso?&rdquo;. Tudo num lugar só, sempre atualizado.</p>
                        </div>
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

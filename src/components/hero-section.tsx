"use client"

import Image from "next/image"
import {
    Sparkles,
    TrendingDown,
    Droplets,
    Feather,
    CircleCheck,
    CreditCard,
    CircleSlash,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { basePath } from "@/lib/base-path"
import { Button } from "@/components/ui/button"

// Azul-marinho chapado e escuro que serve de base para a hero
const NAVY = "#08123f"

export const HeroSection = () => {
    return (
        <div>
            <header>
                <nav className="w-full border-b border-dashed bg-white backdrop-blur dark:bg-zinc-950/50">
                    <div className="m-auto max-w-6xl px-6">
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
                <section
                    className="relative isolate overflow-hidden text-white"
                    style={{ backgroundColor: NAVY }}>
                    <HeroBackground />
                    <div className="relative z-10 mx-auto max-w-6xl px-6 pt-14 pb-16 lg:pt-20 lg:pb-24">
                        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
                            {/* Coluna de texto */}
                            <div className="max-w-xl text-center lg:text-left">
                                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur">
                                    <Sparkles className="size-4 text-blue-300" />
                                    Lista de espera aberta · 70% de desconto de lançamento
                                </div>

                                <h1 className="text-balance text-4xl font-bold leading-[1.05] md:text-5xl lg:text-[3.4rem]">
                                    Do controle de almoxarifado ao{" "}
                                    <span className="text-[#4f8dff]">uso operacional</span> no laboratório
                                </h1>

                                <p className="mx-auto mt-6 max-w-xl text-lg text-balance text-white/75 lg:mx-0">
                                    Cada gota conta. Acompanhe reagentes, insumos e equipamentos desde o recebimento
                                    até o consumo, movimentação ou descarte, com{" "}
                                    <span className="font-semibold text-white">histórico rastreável e acesso 100% online</span>.
                                </p>

                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault()
                                        const email = (e.currentTarget.querySelector("input[type=email]") as HTMLInputElement | null)?.value ?? ""
                                        const listaEmail = document.getElementById("lista-email") as HTMLInputElement | null
                                        if (listaEmail) listaEmail.value = email
                                        document.getElementById("lista")?.scrollIntoView({ behavior: "smooth" })
                                    }}
                                    className="mx-auto mt-8 flex w-full max-w-lg flex-col gap-3 sm:flex-row lg:mx-0">
                                    <input
                                        type="email"
                                        required
                                        placeholder="Seu melhor e-mail"
                                        aria-label="E-mail"
                                        className="h-12 flex-1 rounded-xl border border-white/25 bg-white px-4 text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-[#4f8dff] focus:ring-4 focus:ring-[#4f8dff]/30"
                                    />
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="h-12 rounded-xl bg-[#2563eb] px-7 text-base font-semibold text-white shadow-lg shadow-[#2563eb]/50 ring-1 ring-[#4f8dff]/40 hover:bg-[#1d4ed8]">
                                        <span>Entrar na lista</span>
                                    </Button>
                                </form>

                                <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/70 lg:justify-start">
                                    <li className="flex items-center gap-1.5">
                                        <CircleCheck className="size-4 text-[#4f8dff]" />
                                        Vagas limitadas
                                    </li>
                                    <li className="flex items-center gap-1.5">
                                        <CreditCard className="size-4 text-[#4f8dff]" />
                                        Sem cartão de crédito
                                    </li>
                                    <li className="flex items-center gap-1.5">
                                        <CircleSlash className="size-4 text-[#4f8dff]" />
                                        Cancele quando quiser
                                    </li>
                                </ul>
                            </div>

                            {/* Coluna do visual de produto */}
                            <div className="hidden lg:block">
                                <HeroProduct />
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="relative z-10 pb-20 pt-14 text-white"
                    style={{ backgroundColor: NAVY }}>
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

// Visual de produto da hero: imagem do frasco + fluxo de rastreabilidade.
function HeroProduct() {
    return (
        <div className="relative mx-auto w-full max-w-[34rem]">
            <Image
                src={`${basePath}/screens/hero-frasco.png`}
                alt="Frasco de reagente rastreado com fluxo de recebimento, uso, descarte e auditoria"
                width={1132}
                height={1414}
                priority
                unoptimized
                className="h-auto w-full [mask-image:linear-gradient(to_right,transparent,black_12%)]"
            />
        </div>
    )
}

export function HeroBackground() {
    return (
        <div
            aria-hidden
            className="absolute inset-0 -z-10 overflow-hidden">
            {/* Base azul-marinho chapada */}
            <div className="absolute inset-0" style={{ backgroundColor: NAVY }} />

            {/* Leve profundidade atrás do produto (sem animação, mantém o fundo chapado) */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_35%,rgba(37,99,235,0.28),transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(30,58,138,0.35),transparent_55%)]" />

            {/* Textura sutil */}
            <svg className="absolute inset-0 size-full opacity-[0.08] mix-blend-overlay">
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

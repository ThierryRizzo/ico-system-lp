"use client"

import * as React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { basePath } from "@/lib/base-path"

const tabs = [
    {
        id: "reagentes",
        label: "Reagentes",
        title: "Reagentes sob controle, gota a gota",
        text: "Cadastre cada frasco com lote, validade e volume, defina as reações estimadas e deixe o sistema medir o consumo real. Diluição, frasco-filho a partir da origem, bloqueio e descarte com local de segregação: tudo registrado.",
        img: "/screens/reagente.jpg",
        alt: "Tela de detalhe de um reagente no ICO System, com volume, desperdício e histórico",
    },
    {
        id: "equipamentos",
        label: "Equipamentos",
        title: "Equipamentos rastreados de ponta a ponta",
        text: "Fabricante, número de série, forma de posse e setor: tudo cadastrado. Monte planos de manutenção com periodicidade, fornecedor e custo, e acompanhe status, condição e histórico em tempo real.",
        img: "/screens/equipamento.jpg",
        alt: "Tela de detalhe de um equipamento no ICO System, com planos de manutenção e histórico",
    },
    {
        id: "dashboard",
        label: "Dashboard",
        title: "Dashboard que responde antes de você perguntar",
        text: "Eventos, inconsistências, taxa de conformidade e custo por categoria, tudo em tempo real. Alterne entre equipamentos e reagentes com um clique.",
        img: "/screens/dashboard.jpg",
        alt: "Dashboard do ICO System com indicadores de eventos, inconsistências e custos",
    },
    {
        id: "usuarios",
        label: "Usuários",
        title: "Cada pessoa no seu lugar",
        text: "Cadastre a equipe com perfil e setor. Cada evento fica ligado a quem o realizou, então o histórico nunca é anônimo.",
        img: "/screens/usuarios.jpg",
        alt: "Tela de usuários do ICO System, com perfil, setor e status",
    },
]

export function Funcionalidades() {
    const [active, setActive] = React.useState(tabs[0].id)
    const current = tabs.find((t) => t.id === active) ?? tabs[0]

    return (
        <section
            id="recursos"
            className="relative overflow-hidden">
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 z-0 aspect-square w-[2600px] -translate-x-1/2 -translate-y-[2410px] rounded-full bg-[#0a1a5c]"
            />
            <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-24">
                <div className="mx-auto max-w-2xl pt-2 text-center">
                    <h2 className="text-balance text-3xl font-semibold text-white md:text-4xl">
                        O que você controla no ICO System.
                    </h2>
                </div>

                {/* Tabs */}
                <div
                    role="tablist"
                    aria-label="Áreas do ICO System"
                    className="mt-24 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                    {tabs.map((t) => {
                        const selected = t.id === active
                        return (
                            <button
                                key={t.id}
                                type="button"
                                role="tab"
                                aria-selected={selected}
                                onClick={() => setActive(t.id)}
                                className={cn(
                                    "cursor-pointer rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200",
                                    selected
                                        ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25"
                                        : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                                )}>
                                {t.label}
                            </button>
                        )
                    })}
                </div>

                {/* Conteúdo da aba */}
                <div
                    key={active}
                    className="mt-16 grid items-start gap-10 duration-500 animate-in fade-in-50 slide-in-from-bottom-2 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                    <div>
                        <h3 className="text-primary text-2xl font-semibold text-balance">{current.title}</h3>
                        <p className="text-muted-foreground mt-4 leading-relaxed">{current.text}</p>
                    </div>
                    <div className="lg:-mr-16 xl:-mr-32">
                        <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted shadow-xl">
                            <Image
                                src={`${basePath}${current.img}`}
                                alt={current.alt}
                                fill
                                unoptimized
                                sizes="(max-width: 1024px) 100vw, 640px"
                                className="object-cover object-top"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

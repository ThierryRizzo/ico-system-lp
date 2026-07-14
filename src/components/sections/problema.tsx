import { FlaskConical, PackageOpen, TrendingDown, HelpCircle } from "lucide-react"

import { SectionAura } from "@/components/section-aura"

const furos = [
    {
        icon: FlaskConical,
        text: "Um frasco de reagente abre e ninguém anota.",
    },
    {
        icon: PackageOpen,
        text: "Um equipamento sai do setor e não volta.",
    },
    {
        icon: TrendingDown,
        text: "O consumo por reação some no fim do dia.",
    },
    {
        icon: HelpCircle,
        text: "Na auditoria, a resposta é sempre a mesma: “acho que foi assim”.",
    },
]

export function Problema() {
    return (
        <section className="relative overflow-hidden border-t">
            <SectionAura />
            <div className="relative z-10 mx-auto max-w-5xl px-6 py-24">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-3xl font-semibold md:text-4xl">
                        No papel e na planilha, o histórico do laboratório sempre tem um furo.
                    </h2>
                </div>

                <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
                    {furos.map((f) => (
                        <div
                            key={f.text}
                            className="flex items-start gap-4 rounded-2xl border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg hover:shadow-red-500/5">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-600">
                                <f.icon className="size-5" />
                            </div>
                            <p className="pt-1.5 text-[15px] leading-snug font-medium">{f.text}</p>
                        </div>
                    ))}
                </div>

                <p className="mx-auto mt-12 max-w-2xl text-center text-lg text-muted-foreground text-balance">
                    O problema não é falta de controle. É que todo controle manual pode ser esquecido, estimado por cima ou corrigido depois.{" "}
                    <span className="font-semibold text-foreground">E o que não fica registrado, você não consegue provar.</span>
                </p>
            </div>
        </section>
    )
}

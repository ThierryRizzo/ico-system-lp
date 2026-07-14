import { X, ScanLine, ClipboardCheck, History, QrCode } from "lucide-react"

import { SectionAura } from "@/components/section-aura"

const antes = [
    "Planilha que qualquer um edita (ou apaga sem querer)",
    "Dez campos para preencher na mão, toda vez",
    "Ninguém sabe quem pegou o quê",
    "O erro só aparece quando já virou prejuízo",
]

const depois = [
    {
        icon: ScanLine,
        title: "Escaneie o QR Code",
        text: "Do reagente ou equipamento, direto do celular.",
    },
    {
        icon: ClipboardCheck,
        title: "Confirme o uso",
        text: "Quanto usou, se devolveu e em que estado. Em segundos.",
    },
    {
        icon: History,
        title: "Pronto, está registrado",
        text: "Entra no histórico e ninguém consegue alterar.",
    },
]

export function AntesDepois() {
    return (
        <section className="relative overflow-hidden border-t">
            <SectionAura />
            <div className="relative z-10 mx-auto max-w-5xl px-6 py-24">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-3xl font-semibold md:text-4xl">
                        Da planilha bagunçada ao QR Code.
                    </h2>
                    <p className="text-muted-foreground mt-4 text-balance">
                        O mesmo controle que hoje toma tempo e gera erro, agora em três passos que a equipe faz sem pensar.
                    </p>
                </div>

                <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
                    {/* ANTES */}
                    <div className="flex flex-col rounded-2xl border border-red-200 bg-red-50/60 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/10">
                        <span className="inline-flex w-fit items-center rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-700">
                            Antes
                        </span>
                        <h3 className="mt-4 text-xl font-semibold">Planilha, papel e memória</h3>
                        <ul className="mt-6 space-y-4">
                            {antes.map((t) => (
                                <li
                                    key={t}
                                    className="text-muted-foreground flex items-start gap-3 text-[15px]">
                                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                                        <X className="size-3.5" />
                                    </span>
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* DEPOIS */}
                    <div className="border-primary/20 bg-primary/5 flex flex-col rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                        <span className="bg-primary/10 text-primary inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                            <QrCode className="size-3.5" />
                            Depois
                        </span>
                        <h3 className="mt-4 text-xl font-semibold">Três passos com o QR Code</h3>
                        <ol className="mt-6 space-y-5">
                            {depois.map((d, i) => (
                                <li
                                    key={d.title}
                                    className="flex items-start gap-4">
                                    <span className="bg-primary text-primary-foreground flex size-9 shrink-0 items-center justify-center rounded-xl">
                                        <d.icon className="size-4" />
                                    </span>
                                    <div>
                                        <p className="font-medium">
                                            {i + 1}. {d.title}
                                        </p>
                                        <p className="text-muted-foreground mt-0.5 text-sm">{d.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

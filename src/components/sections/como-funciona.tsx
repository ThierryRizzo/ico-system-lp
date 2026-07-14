import { SectionAura } from "@/components/section-aura"

const passos = [
    {
        n: "1",
        title: "Cadastre",
        text: "Registre equipamentos e reagentes com todos os dados: fabricante, lote, validade, setor, plano de manutenção. Cada item ganha um QR Code próprio.",
    },
    {
        n: "2",
        title: "Escaneie ao pegar",
        text: "Vai usar um reagente ou levar um equipamento? Escaneia o QR Code e o sistema abre o evento na hora. Sem caderno, sem planilha.",
    },
    {
        n: "3",
        title: "Devolva e registre",
        text: "Na devolução, informe o estado, o volume usado e o tempo. Se houve desperdício ou defeito, o sistema pede o motivo antes de fechar.",
    },
    {
        n: "4",
        title: "Acompanhe no dashboard",
        text: "Veja indicadores, inconsistências e custos em tempo real. E, quando precisar, o histórico completo de qualquer item.",
    },
]

export function ComoFunciona() {
    return (
        <section
            id="como-funciona"
            className="relative overflow-hidden border-t">
            <SectionAura />
            <div className="relative z-10 mx-auto max-w-5xl px-6 py-24">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-3xl font-semibold md:text-4xl">
                        Rastreabilidade começa com um QR Code.
                    </h2>
                </div>

                <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {passos.map((p, i) => (
                        <div
                            key={p.n}
                            className="relative">
                            {i < passos.length - 1 && (
                                <div className="absolute left-10 top-5 hidden h-0.5 w-[calc(100%-0.5rem)] bg-gradient-to-r from-primary/50 to-primary/15 lg:block" />
                            )}
                            <div className="bg-primary text-primary-foreground relative z-10 flex size-10 items-center justify-center rounded-full text-base font-semibold ring-8 ring-[color:var(--muted)]/30">
                                {p.n}
                            </div>
                            <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{p.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

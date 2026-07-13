import { History, Droplets, QrCode, ClipboardCheck } from "lucide-react"

const beneficios = [
    {
        icon: History,
        title: "Cada evento fica gravado (e assim continua)",
        text: "Uso, movimentação, manutenção, descarte: tudo entra numa linha do tempo com autor, data e hora. E nada é editado depois. Você não lembra o que aconteceu. Você prova.",
    },
    {
        icon: Droplets,
        title: "Você enxerga o desperdício real",
        text: "Recomendou 0,1 ml por reação e o operador usou 0,2 ml? O sistema calcula a diferença, exige o motivo e soma a % de desperdício do frasco.",
    },
    {
        icon: QrCode,
        title: "Nenhum equipamento some",
        text: "Escaneou o QR Code, o equipamento saiu com você. Devolveu, ele registra o estado e o tempo. A qualquer momento você sabe o que está disponível e onde cada ativo esteve.",
    },
    {
        icon: ClipboardCheck,
        title: "Auditoria deixa de ser um problema",
        text: "Pediram o histórico de um lote, equipamento ou operador? A resposta está a um clique. Filtre, exporte e apresente, sem planilha remontada na véspera.",
    },
]

export function Beneficios() {
    return (
        <section className="bg-[#0a1a5c]">
            <div className="mx-auto max-w-5xl px-6 py-24">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-3xl font-semibold text-white md:text-4xl">
                        Um registro que acompanha cada item e que ninguém consegue mudar.
                    </h2>
                </div>

                <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
                    {beneficios.map((b) => (
                        <div
                            key={b.title}
                            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/20">
                            <div className="flex size-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300 transition-colors duration-300 group-hover:bg-blue-500/25 group-hover:text-blue-200">
                                <b.icon className="size-5 transition-transform duration-300 group-hover:scale-110" />
                            </div>
                            <h3 className="mt-5 text-lg font-semibold text-white">{b.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-white/65">{b.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

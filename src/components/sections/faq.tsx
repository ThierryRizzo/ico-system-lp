import { Plus } from "lucide-react"

const perguntas = [
    {
        q: "Minha equipe não vai querer preencher mais um sistema.",
        a: "O registro acontece no fluxo que já existe: escanear o QR Code ao pegar e ao devolver. São segundos, direto do celular. Mais rápido que anotar num caderno.",
    },
    {
        q: "Já tenho planilha pra isso.",
        a: "Planilha pode ser editada, sobrescrita e esquecida. O ICO System grava cada evento com autor e horário, e não deixa alterar o passado. É a diferença entre anotar e comprovar.",
    },
    {
        q: "E se eu precisar do histórico numa auditoria?",
        a: "É para isso que ele existe. Todo o histórico de reagentes, equipamentos e operadores fica filtrável e disponível a qualquer momento.",
    },
    {
        q: "Serve pro meu tipo de laboratório?",
        a: "Foi desenhado para laboratórios e centros de diagnóstico que precisam controlar reagentes, insumos e equipamentos, seja qual for a especialidade.",
    },
    {
        q: "Quanto custa?",
        a: "Estamos em fase de lançamento. Quem entra agora na lista de espera garante 70% de desconto quando o sistema abrir. O plano é definido depois, de acordo com o tamanho do laboratório.",
    },
]

export function Faq() {
    return (
        <section
            id="precos"
            className="border-t">
            <div className="mx-auto max-w-3xl px-6 py-24">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-3xl font-semibold md:text-4xl">Perguntas frequentes</h2>
                </div>

                <div className="mt-12 divide-y rounded-2xl border bg-card text-foreground shadow-sm">
                    {perguntas.map((p) => (
                        <details
                            key={p.q}
                            className="group px-6">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-medium">
                                {p.q}
                                <Plus className="text-muted-foreground size-5 shrink-0 transition-transform duration-200 group-open:rotate-45" />
                            </summary>
                            <p className="text-muted-foreground pb-5 leading-relaxed">{p.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    )
}

"use client"

import { Button } from "@/components/ui/button"

const areas = [
    "Laboratório clínico / análises",
    "Anatomia patológica",
    "Microbiologia",
    "Pesquisa / universidade",
    "Indústria / farmacêutica",
    "Outro",
]

export function ListaEspera() {
    return (
        <section
            id="lista"
            className="relative overflow-hidden border-t">
            {/* Cúpula azul (mesma da seção de recursos) */}
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 z-0 aspect-square w-[2600px] -translate-x-1/2 -translate-y-[2410px] rounded-full bg-[#0a1a5c]"
            />

            <div className="relative z-10 mx-auto max-w-2xl px-6 pb-24 pt-16">
                {/* Título curvado acompanhando a cúpula */}
                <h2 className="sr-only">Garanta seu desconto de lançamento</h2>
                <svg
                    aria-hidden="true"
                    viewBox="0 0 1000 140"
                    className="mx-auto w-full max-w-xl"
                    preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <path
                            id="lista-arc"
                            d="M 50 48 Q 500 108 950 48"
                            fill="none"
                        />
                    </defs>
                    <text
                        textAnchor="middle"
                        style={{
                            fill: "#ffffff",
                            fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                            fontSize: "40px",
                            fontWeight: 600,
                        }}>
                        <textPath
                            href="#lista-arc"
                            startOffset="50%">
                            Garanta seu desconto de lançamento
                        </textPath>
                    </text>
                </svg>

                {/* Bloco branco: chamada + formulário */}
                <div className="mx-auto mt-12 max-w-xl">
                    <p className="text-muted-foreground mx-auto max-w-md text-center text-balance">
                        Os primeiros inscritos garantem{" "}
                        <span className="text-foreground font-semibold">70% de desconto</span> no lançamento. Deixe seus dados e a gente avisa quando abrir.
                    </p>

                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="mt-8 grid gap-4 rounded-2xl border bg-card p-6 shadow-lg sm:grid-cols-2 sm:p-8">
                        <Field label="Nome">
                            <input
                                type="text"
                                required
                                placeholder="Seu nome"
                                className={inputClass}
                            />
                        </Field>
                        <Field label="E-mail">
                            <input
                                type="email"
                                required
                                placeholder="voce@laboratorio.com"
                                className={inputClass}
                            />
                        </Field>
                        <Field label="Telefone">
                            <input
                                type="tel"
                                required
                                placeholder="(00) 00000-0000"
                                className={inputClass}
                            />
                        </Field>
                        <Field label="Área de atuação">
                            <select
                                required
                                defaultValue=""
                                className={inputClass}>
                                <option
                                    value=""
                                    disabled>
                                    Selecione
                                </option>
                                {areas.map((a) => (
                                    <option
                                        key={a}
                                        value={a}>
                                        {a}
                                    </option>
                                ))}
                            </select>
                        </Field>

                        <Button
                            type="submit"
                            size="lg"
                            className="mt-2 h-11 w-full sm:col-span-2">
                            <span>Quero garantir meu desconto</span>
                        </Button>
                    </form>
                    <p className="text-muted-foreground mt-3 text-center text-xs">
                        Sem compromisso. Vagas limitadas para o lote de lançamento.
                    </p>
                </div>
            </div>
        </section>
    )
}

const inputClass =
    "h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"

function Field({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">{label}</span>
            {children}
        </label>
    )
}

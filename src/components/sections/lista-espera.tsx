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
            className="bg-[#0a1a5c]">
            <div className="mx-auto max-w-xl px-6 py-24">
                <div className="rounded-2xl border bg-card p-6 shadow-lg sm:p-8">
                    <div className="text-center">
                        <h2 className="text-balance text-2xl font-semibold md:text-3xl">
                            Garanta seu desconto de lançamento
                        </h2>
                        <p className="text-muted-foreground mx-auto mt-3 max-w-md text-balance">
                            Os primeiros inscritos garantem{" "}
                            <span className="text-foreground font-semibold">70% de desconto</span> no lançamento. Deixe seus dados e a gente avisa quando abrir.
                        </p>
                    </div>

                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="mt-8 grid gap-4 sm:grid-cols-2">
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
                </div>
                <p className="mt-3 text-center text-xs text-white/60">
                    Sem compromisso. Vagas limitadas para o lote de lançamento.
                </p>
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

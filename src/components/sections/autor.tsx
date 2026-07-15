export function Autor() {
    return (
        <section
            id="autor"
            className="border-t">
            <div className="mx-auto max-w-3xl px-6 py-24">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-semibold md:text-4xl">
                        Criado por quem conhece o laboratório por dentro.
                    </h2>
                </div>

                <div className="mt-12 flex flex-col items-center gap-6 rounded-3xl border bg-card p-8 text-center shadow-sm sm:flex-row sm:gap-8 sm:p-10 sm:text-left">
                    <div className="bg-primary/10 text-primary flex size-24 shrink-0 items-center justify-center rounded-full text-2xl font-semibold">
                        EM
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Dr. Éber Emanuel Mayoral</h3>
                        <p className="text-primary text-sm font-medium">
                            Médico patologista e gestor de processos laboratoriais
                        </p>
                        <p className="text-muted-foreground mt-3 leading-relaxed">
                            Idealizou o ICO System com base em necessidades reais observadas na rotina de laboratórios de alta complexidade.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

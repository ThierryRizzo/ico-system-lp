import { CalendarCheck } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const EMAIL = "contato@pathoscan.com.br"

export function Apresentacao() {
    return (
        <section
            id="apresentacao"
            className="border-t">
            <div className="mx-auto max-w-2xl px-6 py-24">
                <div className="rounded-3xl border bg-card p-8 text-center shadow-sm sm:p-12">
                    <div className="bg-primary/10 text-primary mx-auto flex size-12 items-center justify-center rounded-2xl">
                        <CalendarCheck className="size-6" />
                    </div>
                    <h2 className="mt-6 text-balance text-2xl font-semibold md:text-3xl">
                        Agende uma apresentação
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-3 max-w-md text-balance">
                        Quer conhecer melhor o ICO System e entender como ele pode ser aplicado à rotina do seu laboratório?
                    </p>
                    <a
                        href={`mailto:${EMAIL}?subject=Agendamento de apresentação do ICO System`}
                        className={cn(buttonVariants({ size: "lg" }), "mt-8")}>
                        <span>Agendar por e-mail</span>
                    </a>
                    <p className="text-muted-foreground mt-4 text-sm">
                        Ou escreva para{" "}
                        <a
                            href={`mailto:${EMAIL}`}
                            className="text-primary font-medium underline-offset-2 hover:underline">
                            {EMAIL}
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}

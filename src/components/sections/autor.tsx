import Image from "next/image"
import { BadgeCheck } from "lucide-react"

import { basePath } from "@/lib/base-path"

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

                <div className="mt-12 flex flex-col items-center gap-6 rounded-3xl border bg-card p-8 text-center shadow-sm sm:flex-row sm:items-start sm:gap-8 sm:p-10 sm:text-left">
                    <div className="ring-primary/10 relative size-28 shrink-0 overflow-hidden rounded-full ring-4">
                        <Image
                            src={`${basePath}/eber.jpg`}
                            alt="Dr. Éber Emanuel Mayoral"
                            fill
                            unoptimized
                            sizes="112px"
                            className="object-cover object-[center_22%]"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Dr. Éber Emanuel Mayoral</h3>
                        <p className="text-primary text-sm font-medium">
                            Médico patologista e gestor de processos laboratoriais
                        </p>
                        <p className="text-muted-foreground mt-3 leading-relaxed">
                            Idealizador do ICO System. Atua há mais de uma década em anatomia patológica, coordenando processos de imuno-histoquímica e desenvolvendo soluções para rastreabilidade, qualidade e gestão operacional em laboratórios de alta complexidade.
                        </p>
                    </div>
                </div>

                <div className="mt-6 flex justify-center">
                    <span className="border-primary/20 bg-primary/5 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-2 text-center text-sm font-medium text-balance">
                        <BadgeCheck className="size-4 shrink-0" />
                        Projeto aprovado na Fase 1 do Programa Centelha SP
                    </span>
                </div>
            </div>
        </section>
    )
}

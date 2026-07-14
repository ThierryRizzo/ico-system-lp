import { cn } from "@/lib/utils"

// Fundo decorativo para as seções claras: base com leve degradê,
// grade de pontos sutil e brilhos (auroras) suaves no azul da marca.
export function SectionAura({ className }: { className?: string }) {
    return (
        <div
            aria-hidden
            className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
            {/* base com degradê suave */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-blue-50/50" />

            {/* grade de pontos que some nas bordas */}
            <div className="absolute inset-0 [background-image:radial-gradient(circle_at_center,rgba(37,99,235,0.10)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_35%,black,transparent)]" />

            {/* brilhos suaves */}
            <div className="absolute -left-40 -top-24 size-[30rem] rounded-full bg-blue-400/20 blur-[120px]" />
            <div className="absolute -right-40 bottom-[-25%] size-[30rem] rounded-full bg-indigo-400/15 blur-[120px]" />
        </div>
    )
}

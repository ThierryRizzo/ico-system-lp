import { cn } from "@/lib/utils"

// Fundo decorativo para as seções claras: base levemente azulada,
// grade de pontos sutil e brilhos (glows) azuis bem visíveis.
export function SectionAura({ className }: { className?: string }) {
    return (
        <div
            aria-hidden
            className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
            {/* base com leve degradê azulado */}
            <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-10%,#ffffff_38%,#e6edff_78%,#dbe4ff_100%)]" />

            {/* grade de pontos que some nas bordas */}
            <div className="absolute inset-0 [background-image:radial-gradient(circle_at_center,rgba(37,99,235,0.12)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,black,transparent)]" />

            {/* glows azuis visíveis */}
            <div className="absolute -top-32 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-blue-500/30 blur-[120px]" />
            <div className="absolute top-1/4 -left-24 size-[26rem] rounded-full bg-indigo-500/25 blur-[110px]" />
            <div className="absolute -right-24 bottom-0 size-[28rem] rounded-full bg-sky-400/30 blur-[110px]" />
        </div>
    )
}

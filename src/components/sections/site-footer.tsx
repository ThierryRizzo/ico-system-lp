import { Logo } from "@/components/hero-section"

export function SiteFooter() {
    return (
        <footer
            id="sobre"
            className="border-t">
            <div className="mx-auto max-w-5xl px-6 py-12">
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <Logo />
                    <p className="text-muted-foreground text-sm">
                        © 2026 ICO System. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}

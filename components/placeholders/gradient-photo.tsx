import { cn } from "@/lib/utils";
import type { CoverTone } from "@/lib/mock-data";

type GradientPhotoProps = {
    title?: string;
    subtitle?: string;
    tone: CoverTone;
    ratio?: "portrait" | "square" | "landscape" | "hero";
    className?: string;
    overlay?: React.ReactNode;
};

const toneClasses: Record<CoverTone, string> = {
    coast:
        "from-[#f4d7ad] via-[#f7efe5] to-[#8ac7d6] after:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.9),transparent_22%),radial-gradient(circle_at_80%_78%,rgba(39,113,140,0.22),transparent_28%)]",
    city: "from-[#f4b57a] via-[#f2d7bf] to-[#6b8fb3] after:bg-[radial-gradient(circle_at_22%_30%,rgba(255,242,213,0.75),transparent_18%),radial-gradient(circle_at_84%_20%,rgba(59,92,138,0.36),transparent_26%),linear-gradient(180deg,transparent_0%,rgba(21,34,57,0.24)_100%)]",
    mountain:
        "from-[#ccd8d5] via-[#eff4ee] to-[#7a8f80] after:bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.8),transparent_20%),radial-gradient(circle_at_76%_76%,rgba(45,79,61,0.22),transparent_30%)]",
    desert:
        "from-[#d68e4e] via-[#f2cf9c] to-[#6b4f47] after:bg-[radial-gradient(circle_at_22%_18%,rgba(255,245,224,0.72),transparent_18%),radial-gradient(circle_at_78%_82%,rgba(79,40,24,0.28),transparent_32%)]",
};

const ratioClasses = {
    portrait: "aspect-[4/5]",
    square: "aspect-square",
    landscape: "aspect-[16/10]",
    hero: "aspect-[4/5] sm:aspect-[16/10]",
};

export function GradientPhoto({
    title,
    subtitle,
    tone,
    ratio = "landscape",
    className,
    overlay,
}: GradientPhotoProps) {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-[28px] bg-gradient-to-br shadow-[0_20px_60px_rgba(15,31,22,0.14)]",
                ratioClasses[ratio],
                toneClasses[tone],
                "before:absolute before:inset-x-0 before:bottom-0 before:top-1/3 before:bg-gradient-to-t before:from-black/45 before:to-transparent",
                "after:absolute after:inset-0 after:content-['']",
                className,
            )}
        >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_35%,rgba(255,255,255,0.08)_100%)]" />
            {overlay ? <div className="absolute inset-0">{overlay}</div> : null}
            {(title || subtitle) && (
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white">
                    {subtitle ? <div className="text-xs uppercase tracking-[0.26em] text-white/75">{subtitle}</div> : null}
                    {title ? <div className="mt-2 text-xl font-semibold tracking-tight">{title}</div> : null}
                </div>
            )}
        </div>
    );
}

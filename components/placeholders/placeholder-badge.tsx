import { cn } from "@/lib/utils";

type PlaceholderBadgeProps = {
    children: React.ReactNode;
    variant?: "default" | "muted" | "accent";
    className?: string;
};

export function PlaceholderBadge({
    children,
    variant = "default",
    className,
}: PlaceholderBadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
                variant === "default" && "bg-white/75 text-foreground",
                variant === "muted" && "bg-primary/10 text-primary",
                variant === "accent" && "bg-[#f6d7a7] text-[#77511c]",
                className,
            )}
        >
            {children}
        </span>
    );
}

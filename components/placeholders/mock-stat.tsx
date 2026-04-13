import { cn } from "@/lib/utils";

type MockStatProps = {
    label: string;
    value: string;
    className?: string;
};

export function MockStat({ label, value, className }: MockStatProps) {
    return (
        <div className={cn("rounded-3xl border border-border/70 bg-card/90 p-4 shadow-sm", className)}>
            <div className="text-2xl font-semibold tracking-tight">{value}</div>
            <div className="text-muted-foreground mt-1 text-sm">{label}</div>
        </div>
    );
}

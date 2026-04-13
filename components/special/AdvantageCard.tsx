import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LucideIcon from "@/components/ui/icon";
import type { LucideIcon as LucideIconType } from "lucide-react";

type AdvantageCardProps = {
    title: string;
    body?: string;
    icon?: LucideIconType;
    iconSrc?: string;
    headerClassName?: string;
    variant?: "default" | "compact";
};

export function AdvantageCard({
    title,
    body,
    icon,
    iconSrc,
    headerClassName,
    variant = "default",
}: AdvantageCardProps) {
    const isCompact = variant === "compact" || !body;

    return (
        <Card className="overflow-hidden rounded-2xl p-0 shadow-sm border-border bg-card">
            <CardHeader className="p-0">
                <div className={`bg-primary relative pb-3 ${headerClassName ?? ""}`}>
                    <div className="flex items-center justify-center py-6">
                        {iconSrc ? (
                            <Image
                                src={iconSrc}
                                alt=""
                                width={56}
                                height={56}
                                className="h-14 w-14 object-contain brightness-0 invert"
                            />
                        ) : icon ? (
                            <LucideIcon icon={icon} className="h-12 w-12 text-white" />
                        ) : (
                            <span className="text-xl font-semibold text-white">◎</span>
                        )}
                    </div>

                    {/* Shape divider triangulaire */}
                    <div className="absolute -bottom-px left-0 w-full rotate-180 overflow-hidden leading-[0]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 2600 131.1"
                            preserveAspectRatio="none"
                            className="block h-[26px] w-full"
                        >
                            <path d="M0 0L2600 0 2600 69.1 0 0z" fill="white" />
                            <path d="M0 0L2600 0 2600 69.1 0 69.1z" fill="white" opacity="0.5" />
                            <path d="M2600 0L0 0 0 130.1 2600 69.1z" fill="white" opacity="0.25" />
                        </svg>
                    </div>
                </div>

                <div className={isCompact ? "px-6 py-8" : "px-6 pt-6 pb-2"}>
                    <CardTitle
                        className={
                            isCompact
                                ? "text-center text-2xl leading-tight font-semibold tracking-tight"
                                : "text-lg tracking-tight"
                        }
                    >
                        {title}
                    </CardTitle>
                </div>
            </CardHeader>

            {!isCompact ? (
                <CardContent className="text-muted-foreground px-6 pb-6 text-sm leading-relaxed">
                    {body}
                </CardContent>
            ) : null}
        </Card>
    );
}

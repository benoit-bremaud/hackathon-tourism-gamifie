type RateLimitEntry = { count: number; resetTime: number };

const store = new Map<string, RateLimitEntry>();

// Clean expired entries every 5 minutes
setInterval(
    () => {
        const now = Date.now();
        for (const [key, entry] of store) {
            if (now >= entry.resetTime) store.delete(key);
        }
    },
    5 * 60 * 1000,
).unref();

export function rateLimit(
    req: Request,
    { limit, windowMs }: { limit: number; windowMs: number },
): { ok: boolean; remaining: number } {
    const forwarded = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    const ip = forwarded?.split(",")[0]?.trim() || realIp || "unknown";

    const now = Date.now();
    const entry = store.get(ip);

    if (!entry || now >= entry.resetTime) {
        store.set(ip, { count: 1, resetTime: now + windowMs });
        return { ok: true, remaining: limit - 1 };
    }

    entry.count++;
    if (entry.count > limit) {
        return { ok: false, remaining: 0 };
    }

    return { ok: true, remaining: limit - entry.count };
}

import type { Comment } from "@/lib/mock-data";

export function PhotoComments({ comments }: { comments: Comment[] }) {
    return (
        <div className="space-y-3">
            {comments.map((comment) => (
                <div
                    key={comment.id}
                    className="rounded-3xl border border-border/70 bg-card/90 p-4 shadow-sm"
                >
                    <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold">
                            {comment.avatar}
                        </div>
                        <div className="min-w-0">
                            <div className="flex items-center justify-between gap-2">
                                <div className="font-medium">{comment.author}</div>
                                <div className="text-muted-foreground text-xs">{comment.postedAt}</div>
                            </div>
                            <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                                {comment.message}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

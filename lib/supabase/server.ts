import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

import type { Database } from "./types";

const getSupabaseConfig = () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error(
            "Missing Supabase environment variables. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
        );
    }

    return { supabaseUrl, supabaseAnonKey };
};

export const createSupabaseServerClient = () => {
    const { supabaseUrl, supabaseAnonKey } = getSupabaseConfig();
    const cookieStore = cookies();

    return createServerClient<Database>(supabaseUrl, supabaseAnonKey, {
        cookies: {
            getAll() {
                return cookieStore.getAll().map((cookie) => ({
                    name: cookie.name,
                    value: cookie.value,
                }));
            },
            setAll(cookiesToSet, headers) {
                cookiesToSet.forEach(({ name, value, options }) => {
                    cookieStore.set({ name, value, ...options });
                });
                if (headers && Object.keys(headers).length > 0) {
                    // Headers are provided for cache control when cookies are set; no response object is available here.
                }
            },
        },
    });
};

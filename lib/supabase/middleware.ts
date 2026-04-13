import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

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

export const updateSession = async (request: NextRequest) => {
    const { supabaseUrl, supabaseAnonKey } = getSupabaseConfig();
    const response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    });

    const supabase = createServerClient<Database>(supabaseUrl, supabaseAnonKey, {
        cookies: {
            getAll() {
                return request.cookies.getAll().map(({ name, value }) => ({ name, value }));
            },
            setAll(cookiesToSet, headers) {
                cookiesToSet.forEach(({ name, value, options }) => {
                    request.cookies.set({ name, value, ...options });
                    response.cookies.set({ name, value, ...options });
                });

                Object.entries(headers).forEach(([key, value]) => {
                    response.headers.set(key, value);
                });
            },
        },
    });

    await supabase.auth.getUser();

    return response;
};

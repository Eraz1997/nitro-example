const BEARER_PREFIX = "Bearer ";

export function useBearerToken(): string | null {
    const event = useEvent();
    const authHeader = event.headers.get("Authorization");
    if (!authHeader?.startsWith(BEARER_PREFIX)) {
        return null;
    }
    return authHeader.substring(BEARER_PREFIX.length);
}

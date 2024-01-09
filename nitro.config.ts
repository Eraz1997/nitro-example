export default defineNitroConfig({
    compressPublicAssets: {
        gzip: true,
        brotli: false,
    },
    experimental: {
        asyncContext: true,
    },
    runtimeConfig: {
        authorizationKey: process.env.AUTH_KEY,
    },
    storage: {
        "redis": {
            driver: "redis",
            host: process.env.REDIS_HOST,
            password: process.env.REDIS_PASSWORD,
            port: 6379,
            tls: false,
        },
    },
    timing: true,
});

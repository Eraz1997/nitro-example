export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const bearerToken = await useBearerToken();
    
    if (bearerToken !== runtimeConfig.authorizationKey) {
        throw createError({statusCode: 403});
    }
})

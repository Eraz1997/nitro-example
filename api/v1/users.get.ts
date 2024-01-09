export default defineEventHandler(async () => {
    const storage = useStorage();
    const users: string[] = await storage.getItem("users") ?? [];
    return { users };
})

export default defineEventHandler(async (event) => {
    const storage = useStorage();
    const users: string[] = await storage.getItem("users") ?? [];
    storage.setItem("users", users.concat([event.context.params.name]));
    return {};
});

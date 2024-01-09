export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook("request", (event) => {
    console.info(`${event.method} ${event.path} from ${event.context.clientAddress ?? "unknown IP address"} -> ${event.node.res.statusCode}`);
  });
  nitro.hooks.hook("error", (event) => {
    console.error(`${event.name}: ${event.message}`);
  });
});

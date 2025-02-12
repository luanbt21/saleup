export default {
	async scheduled(event, env, ctx): Promise<void> {
		await fetch("https://pocketbase-ogfb.onrender.com/api/health");
	},
} satisfies ExportedHandler<Env>;

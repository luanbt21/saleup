import { paraglide } from "@inlang/paraglide-sveltekit/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitest/config";

const host = process.env.TAURI_DEV_HOST;

export default defineConfig({
	plugins: [
		sveltekit(),
		tailwindcss(),
		paraglide({
			project: "./project.inlang",
			outdir: "./src/lib/paraglide",
		}),
	],

	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"],
	},
	clearScreen: false,
	server: {
		port: 1420,
		strictPort: true,
		host: host || false,
		hmr: host
			? {
					protocol: "ws",
					host,
					port: 1421,
				}
			: undefined,
		watch: {
			ignored: ["**/src-tauri/**"],
		},
	},
});

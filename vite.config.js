import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
	root: "src",
	css: {
		sourcemap: true,
		devSourcemap: true,
	},
	build: {
		cssMinify: false,
		devSourcemap: true,
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				contact: resolve(__dirname, "contact.html"),
			},
			output: {
				entryFileNames: [
					`js/[name].js`,
					`../node_modules/htmx.org/dist/htmx.min.js`,
				],
				chunkFileNames: [
					`js/[name].js`,
					`../node_modules/htmx.org/dist/htmx.min.js`,
				],
				assetFileNames: "css/[name].css",
			},
		},
		outDir: "../public",
		emptyOutDir: true,
	},
})

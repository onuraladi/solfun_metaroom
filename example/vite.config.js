// Author: Kadir Kaan Yazgan / Onur Aladi
// ID: 10915083388 / 16672586674
// Section: CMPE 360
// Project: 02
// Description: For building the server, we are used vite.
import glsl from "vite-plugin-glsl"
import { defineConfig } from "vite"

export default defineConfig({
	plugins: [glsl()],
	resolve: {
		alias: [
			{ find: "screen-space-reflections", replacement: "../src/index.js" },
			{ find: "three", replacement: __dirname + "/node_modules/three" },
			{ find: "postprocessing", replacement: __dirname + "/node_modules/postprocessing" }
		]
	}
})

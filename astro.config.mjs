import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import svelte from "@astrojs/svelte";  // ✅ Agrega esto

export default defineConfig({
  site: "https://blog-astro11.netlify.app/",
  integrations: [preact(), svelte()],  // ✅ Añade Svelte aquí
});

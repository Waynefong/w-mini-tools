import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ command, mode }) => {
  const rootList = <Record<string, string>>{
    development: "/",
    demo: "./examples",
  };
  return {
    root: rootList[mode],
    plugins: [vue()],
  };
});

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.REACT_APP_USER_EMAIL": JSON.stringify(
        env.REACT_APP_USER_EMAIL
      ),
      "process.env.REACT_APP_USER_PASSWORD": JSON.stringify(
        env.REACT_APP_USER_PASSWORD
      ),
    },
    plugins: [react()],
  };
});

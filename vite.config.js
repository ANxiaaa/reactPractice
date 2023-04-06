// 当以命令方式运行 vite 时，vite 会自动解析项目根目录下 vite.config.js 的文件。
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()], // 配置需要使用的插件列表
});

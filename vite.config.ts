import { resolve } from "path";
import { warpperEnv } from "./build";
import { getPluginsList } from "./build/plugins";
import { type UserConfigExport, type ConfigEnv, loadEnv } from "vite";

/** 当前执行node命令时文件夹的地址（工作目录） */
const root: string = process.cwd();

/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};

/** 设置别名 */
const alias: Record<string, string> = {
  "@": pathResolve("src"),
};

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const {VITE_PORT, VITE_PUBLIC_PATH, VITE_BASE_API} =
      warpperEnv(loadEnv(mode, root));
  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias
    },
    // 服务端渲染
    server: {
      host: '0.0.0.0', // 类型： string | boolean IP配置，支持从IP启动
      port: VITE_PORT, // 类型： number  | 指定服务启动端口
      https: false, // 类型： boolean | https.ServerOptions 是否开启 https
      open: false, // 类型： boolean | string 在服务启动时自动在浏览器中打开
      hmr: { overlay: false }, // 禁用或配置 HMR 连接
      cors: true, // 类型： boolean | 是否允许跨域
      proxy: {
        //  类型： Record<string, string | ProxyOptions> 服务器配置自定义代理规则
        '/api': {
          target: VITE_BASE_API,
          changeOrigin: true, // 开发模式，默认的origin是真实的 origin:localhost:3000 代理服务会把origin修改为目标地址
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      },
    },
    plugins: getPluginsList(),
  };
};
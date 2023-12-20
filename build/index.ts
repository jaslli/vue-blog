/**
 * 处理环境变量
 */
const warpperEnv = (envConf: Recordable): ViteEnv => {
    /** 环境变量默认值 */
    const ret: ViteEnv = {
        VITE_PORT: 9000,
        VITE_BASE_API: "http://localhost:9001"
    };

    for (const envName of Object.keys(envConf)) {
        let realName = envConf[envName].replace(/\\n/g, "\n");
        realName =
            realName === "true" ? true : realName === "false" ? false : realName;

        if (envName === "VITE_PORT") {
            realName = Number(realName);
        }
        ret[envName] = realName;
        if (typeof realName === "string") {
            process.env[envName] = realName;
        } else if (typeof realName === "object") {
            process.env[envName] = JSON.stringify(realName);
        }
    }
    return ret;
};

export { warpperEnv };
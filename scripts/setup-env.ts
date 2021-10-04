import { ENV_LIST } from "../src/libs/util/util.environment";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

function run(env: string) {
    const rootPath = process.cwd();
    const envSettingPath = path.join(rootPath, ".env");
    const envRuntimePath = path.join(rootPath, "/src/environment.ts");

    if (!env.match(/development/)) throw new Error("Invalid environment - " + env);
    dotenv.config({ path: envSettingPath });

    const envVars = ENV_LIST.reduce((accum, curr) => {
        accum[curr] = process.env[curr] as string;
        return accum;
    }, {} as { [k in typeof ENV_LIST[number]]: string });

    const file = `export default ${JSON.stringify(envVars, null, 4)}`;
    fs.writeFileSync(envRuntimePath, file);
    process.exit(0);
}

run(process.argv[2]);

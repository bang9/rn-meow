const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

const ENV_LIST = ["API_KEY_CAT", "API_URL_CAT"];

function run(env) {
    const rootPath = process.cwd();
    const envSettingPath = path.join(rootPath, ".env");
    const envRuntimePath = path.join(rootPath, "/src/environment.ts");

    if (!env.match(/development/)) throw new Error("Invalid environment - " + env);
    dotenv.config({ path: envSettingPath });

    const envVars = ENV_LIST.reduce((accum, curr) => {
        accum[curr] = process.env[curr];
        return accum;
    }, {});

    const file = `export const ENV_LIST = ${JSON.stringify(ENV_LIST)};\nexport default ${JSON.stringify(
        envVars,
        null,
        4
    )}`;
    fs.writeFileSync(envRuntimePath, file);
    process.exit(0);
}

run(process.argv[2]);

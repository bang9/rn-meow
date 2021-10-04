import environment from "../../environment";

/* eslint-disable @typescript-eslint/ban-ts-comment */
export const ENV_LIST = <const>["API_KEY_CAT", "API_URL_CAT"];
export function checkEnvImplementation() {
    ENV_LIST.forEach(key => {
        // @ts-ignore
        if (!environment[key]) throw new Error("Environment is not implemented - " + key);
    });
}

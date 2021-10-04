import environment, { ENV_LIST } from "../../environment";

/* eslint-disable @typescript-eslint/ban-ts-comment */
export function checkEnvImplementation() {
    ENV_LIST.forEach(key => {
        // @ts-ignore
        if (!environment[key]) {
            console.warn(
                `Please run 'yarn env:dev' script for implement environment variables
                For more information, visit README.md`
            );
            throw new Error("Environment is not implemented - " + key);
        }
    });
}

/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
import { checkEnvImplementation } from "./src/libs/utils/util.environment";

checkEnvImplementation();

AppRegistry.registerComponent(appName, () => App);

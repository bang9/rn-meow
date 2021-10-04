/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
import { checkEnvImplementation } from "./src/libs/util/util.environment";
import { enableScreens } from "react-native-screens";

checkEnvImplementation();
enableScreens();

AppRegistry.registerComponent(appName, () => App);

import { AppRegistry, Platform, UIManager } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
import { checkEnvImplementation } from "./src/libs/util/util.environment";
import { enableScreens } from "react-native-screens";

checkEnvImplementation();
enableScreens();
if (Platform.OS === "android") UIManager.setLayoutAnimationEnabledExperimental(true);

AppRegistry.registerComponent(appName, () => App);

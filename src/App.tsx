import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import RootStack from "./screens/rootStack";
import CombinedContext from "./contexts/combine";

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <CombinedContext>
                <RootStack />
            </CombinedContext>
        </NavigationContainer>
    );
};

export default App;

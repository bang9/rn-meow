import React from "react";

import RootStack from "./screens/rootStack";
import CombinedContext from "./contexts/combine";

const App: React.FC = () => {
    return (
        <CombinedContext>
            <RootStack />
        </CombinedContext>
    );
};

export default App;

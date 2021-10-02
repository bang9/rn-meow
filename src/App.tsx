import React from "react";

import ItemStorageProvider from "./contexts/context.storage";
import BookmarkItemStorage from "./libs/storage/storage.bookmark";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RootStack from "./screens/rootStack";

const bookmarkItemStorage = new BookmarkItemStorage(AsyncStorage);

const App: React.FC = () => {
    return (
        <ItemStorageProvider bookmarkItemStorage={bookmarkItemStorage}>
            <RootStack />
        </ItemStorageProvider>
    );
};

export default App;

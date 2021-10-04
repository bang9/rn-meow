import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ServiceProvider from "./context.service";
import BookmarkProvider from "./context.service.bookmark";
import BookmarkService from "../libs/service/service.bookmark";

const bookmarkService = new BookmarkService(AsyncStorage);

const CombinedContext: React.FC = ({ children }) => {
    return (
        <ServiceProvider bookmarkService={bookmarkService}>
            <BookmarkProvider>{children}</BookmarkProvider>
        </ServiceProvider>
    );
};

export default CombinedContext;

import React, { useCallback, useContext, useEffect, useState } from "react";
import BookmarkService, { BookmarkItem } from "../libs/service/service.bookmark";
import { useService } from "./context.service";

type BookmarkContextType = {
    bookmarks: BookmarkItem[];
    addToBookmark(item: BookmarkItem): Promise<void>;
    removeFromBookmark(id: BookmarkItem["id"]): Promise<void>;
    isBookmarked(id: BookmarkItem["id"]): boolean;
};
const BookmarkContext = React.createContext<BookmarkContextType>({
    bookmarks: [],
    addToBookmark: async () => {},
    removeFromBookmark: async () => {},
    isBookmarked: () => false
});
const BookmarkProvider: React.FC = ({ children }) => {
    const { bookmarkService } = useService();
    const actions = useCreateBookmarkActions(bookmarkService);
    return <BookmarkContext.Provider value={actions}>{children}</BookmarkContext.Provider>;
};

const useCreateBookmarkActions = (bookmarkService: BookmarkService): BookmarkContextType => {
    const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);

    const addToBookmark = useCallback(
        async (item: BookmarkItem) => {
            await bookmarkService.add(item.id, item);
            setBookmarks(bookmarkService.items());
        },
        [bookmarkService]
    );
    const removeFromBookmark = useCallback(
        async (id: BookmarkItem["id"]) => {
            await bookmarkService.remove(id);
            setBookmarks(bookmarkService.items());
        },
        [bookmarkService]
    );
    const isBookmarked = (id: string) => {
        return Boolean(bookmarks.find(item => item.id === id));
    };

    useEffect(() => {
        bookmarkService.load().then(() => setBookmarks(bookmarkService.items()));
    }, [bookmarkService]);

    return { bookmarks, addToBookmark, removeFromBookmark, isBookmarked };
};

export const useBookmark = (): BookmarkContextType => useContext(BookmarkContext);
export default BookmarkProvider;

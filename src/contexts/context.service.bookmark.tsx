import React, { useContext, useEffect, useState } from "react";
import BookmarkService, { BookmarkItem } from "../libs/service/service.bookmark";
import { useService } from "./context.service";

type BookmarkContextType = {
    bookmarks: BookmarkItem[];
    toggleBookmark(item: BookmarkItem): Promise<void>;
    isBookmarked(id: BookmarkItem["id"]): boolean;
};
const BookmarkContext = React.createContext<BookmarkContextType>({
    bookmarks: [],
    toggleBookmark: async () => {},
    isBookmarked: () => false
});
const BookmarkProvider: React.FC = ({ children }) => {
    const { bookmarkService } = useService();
    const { bookmarks, toggleBookmark, isBookmarked } = useCreateBookmarkActions(bookmarkService);
    return (
        <BookmarkContext.Provider value={{ bookmarks, toggleBookmark, isBookmarked }}>
            {children}
        </BookmarkContext.Provider>
    );
};

const useCreateBookmarkActions = (bookmarkService: BookmarkService): BookmarkContextType => {
    const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);

    const toggleBookmark = async (item: BookmarkItem) => {
        const exists = Boolean(bookmarkService.get(item.id));
        if (exists) await bookmarkService.remove(item.id);
        else await bookmarkService.add(item.id, item);

        setBookmarks(bookmarkService.items());
    };

    const isBookmarked = (id: string) => {
        return Boolean(bookmarks.find(item => item.id === id));
    };

    useEffect(() => {
        bookmarkService.load().then(() => setBookmarks(bookmarkService.items()));
    }, []);

    return { bookmarks, toggleBookmark, isBookmarked };
};

export const useBookmark = (): BookmarkContextType => useContext(BookmarkContext);
export default BookmarkProvider;

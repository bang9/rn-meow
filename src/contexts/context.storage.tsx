import React, { useContext, useEffect, useState } from "react";
import { BookmarkItem } from "../libs/storage/storage.bookmark";
import { ItemStorageInterface } from "../interfaces/interface.storage";
import { recordToArray, sortByDescStorageItem } from "../libs/utils/util.function";

type BookmarkContextType = { bookmarks: BookmarkItem[]; toggleBookmark(item: BookmarkItem): Promise<void> };
const BookmarkContext = React.createContext<BookmarkContextType>({ bookmarks: [], toggleBookmark: async () => {} });

type Props = {
    bookmarkItemStorage: ItemStorageInterface<BookmarkItem>;
};
const ItemStorageProvider: React.FC<Props> = ({ bookmarkItemStorage, children }) => {
    const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);

    const toggleBookmark = async (item: BookmarkItem) => {
        const exists = Boolean(bookmarkItemStorage.get(item.id));

        if (exists) {
            await bookmarkItemStorage.remove(item.id);
        } else {
            await bookmarkItemStorage.set(item.id, item);
        }

        setBookmarks(recordToArray(bookmarkItemStorage.items).sort(sortByDescStorageItem));
    };

    useEffect(() => {
        (async () => {
            await Promise.all([bookmarkItemStorage.load()]);
            setBookmarks(recordToArray(bookmarkItemStorage.items).sort(sortByDescStorageItem));
        })();
    }, []);

    return <BookmarkContext.Provider value={{ bookmarks, toggleBookmark }}>{children}</BookmarkContext.Provider>;
};

export const useBookmarks = (): BookmarkContextType => useContext(BookmarkContext);
export default ItemStorageProvider;

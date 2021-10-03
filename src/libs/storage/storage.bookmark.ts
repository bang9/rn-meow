import { ItemStorageImpl, StorageItemId, StorageItemInterface } from "../../interfaces/interface.storage";
import { CatImageResponseInterface } from "../../interfaces/interface.api";

export type BookmarkItem = StorageItemInterface & Omit<CatImageResponseInterface, "id">;
export default class BookmarkItemStorage extends ItemStorageImpl<BookmarkItem> {
    storageKey = "storage@bookmark";
    items: Record<StorageItemId, BookmarkItem> = {};

    get(id: StorageItemId): BookmarkItem | null {
        return this.items[id] ?? null;
    }

    async remove(id: StorageItemId): Promise<void> {
        delete this.items[id];
        await this.storage.setItem(this.storageKey, JSON.stringify(this.items));
    }

    async set(id: StorageItemId, item: BookmarkItem): Promise<void> {
        this.items[id] = item;
        await this.storage.setItem(this.storageKey, JSON.stringify(this.items));
    }
}
